"use client";
import { useState } from "react";

export default function QuestionnaireForm({ initialData = {}, onSaved }) {
  const [form, setForm] = useState({
    fullName: initialData.fullName || "",
    familyCount: initialData.familyCount?.toString() || "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "familyCount" && /\D/.test(value)) return;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName) {
      setError("Full Name is required");
      return;
    }
    if (form.familyCount === "" || isNaN(Number(form.familyCount))) {
      setError("Family Count must be a number");
      return;
    }
    setError("");
    const token = localStorage.getItem("token");
    const res = await fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        fullName: form.fullName,
        familyCount: Number(form.familyCount),
      }),
    });
    if (res.ok) {
      onSaved?.();
    } else {
      setError("Failed to save");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label className="block mb-1">Full Name</label>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Family Count</label>
        <input
          name="familyCount"
          value={form.familyCount}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Save Profile
      </button>
    </form>
  );
}
