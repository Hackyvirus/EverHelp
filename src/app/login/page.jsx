"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
      } else {
        router.push("/dashboard"); // Redirect to a dashboard or homepage
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-xl font-bold text-center mb-6 text-green-800">
          Login to EverHelp
        </h1>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded border border-green-300 focus:outline-none text-gray-800"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded border border-green-300 focus:outline-none text-gray-800"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 cursor-pointer rounded hover:bg-green-600"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4 text-gray-800">
          Don’t have an account?{" "}
          <a href="/register" className="text-green-700 font-semibold">
            Register here
          </a>
        </p>
      </form>
    </div>
  );
}
