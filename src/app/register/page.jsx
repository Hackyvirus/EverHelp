// pages/register.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Something went wrong");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Create Your Account</h2>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 mb-4 border border-green-300 rounded text-gray-800 focus:outline-green-500"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 mb-4 border border-green-300 rounded text-gray-800 focus:outline-green-500"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-3 mb-4 border border-green-300 rounded text-gray-800 focus:outline-green-500"
        />

        <button
          type="submit"
          className="w-full bg-green-600 cursor-pointer hover:bg-green-700 text-white font-semibold py-3 rounded"
        >
          Sign Up
        </button>

        <p className="text-center text-sm mt-4 text-gray-800">
          Already have an account?{" "}
          <a href="/login" className="text-green-700 font-semibold underline">Login here</a>
        </p>
      </form>
    </div>
  );
}
