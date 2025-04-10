"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SurveyPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    educationStatus: "",
    biggestChallenges: [],
    curriculumPreparedness: "",
    careerGuidance: "",
    scholarshipAccess: "",
    lackingFacilities: [],
    improvementSuggestion: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e, key) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedArray = checked
        ? [...prev[key], value]
        : prev[key].filter((item) => item !== value);
      return {
        ...prev,
        [key]: updatedArray
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const res = await fetch("/api/student-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Submission failed");
    } else {
      setSuccess(true);
      setFormData({
        fullName: "",
        age: "",
        gender: "",
        educationStatus: "",
        biggestChallenges: [],
        curriculumPreparedness: "",
        careerGuidance: "",
        scholarshipAccess: "",
        lackingFacilities: [],
        improvementSuggestion: ""
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      <Header />
      <div className="min-h-screen sm:mt-16 bg-green-100 flex items-center justify-center p-4 pt-24 sm:p-6 md:p-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md w-full max-w-2xl"
        >
          <h1 className="text-xl sm:text-2xl font-bold text-green-700 mb-6 text-center">
            Student Survey Form
          </h1>

          <label className="block font-semibold mb-2">Full Name</label>
          <input
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />

          <label className="block font-semibold mb-2">Age</label>
          <input
            name="age"
            min={0}
            max={100}
            type="number"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />

          <label className="block font-semibold mb-2">Gender</label>
          {['Male', 'Female', 'Other', 'Prefer not to say'].map((opt) => (
            <label key={opt} className="block ml-2 mb-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value={opt}
                checked={formData.gender === opt}
                onChange={handleChange}
                required
              />{" "}{opt}
            </label>
          ))}

          <label className="block font-semibold mb-2">Current Educational Status</label>
          <select
            name="educationStatus"
            value={formData.educationStatus}
            onChange={handleChange}
            className="cursor-pointer w-full p-2 border rounded mb-4"
            required
          >
            <option value="">Select one</option>
            {[
              'School (8th–10th)',
              'Higher Secondary (11th–12th)',
              'Undergraduate (Bachelor’s)',
              'Postgraduate (Master’s)',
              'Diploma/Certificate',
              'Other',
            ].map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>

          <label className="block font-semibold mb-2">Challenges You Face</label>
          {[
            'Lack of access to quality teachers',
            'Poor internet/technology access',
            'Financial difficulties',
            'Mental health issues',
            'Pressure from family or society',
            'Language barrier',
            'Other',
          ].map((challenge) => (
            <label key={challenge} className="block cursor-pointer ml-2">
              <input
                type="checkbox"
                className="mr-2"
                value={challenge}
                checked={formData.biggestChallenges.includes(challenge)}
                onChange={(e) => handleCheckboxChange(e, 'biggestChallenges')}
              />{challenge}
            </label>
          ))}

          <label className="block font-semibold mt-4 mb-2">Does curriculum prepare you for jobs?</label>
          {['Yes', 'Somewhat', 'No'].map((opt) => (
            <label key={opt} className="block ml-2 cursor-pointer mb-2">
              <input
                type="radio"
                name="curriculumPreparedness"
                value={opt}
                checked={formData.curriculumPreparedness === opt}
                onChange={handleChange}
                required
              />{" "}{opt}
            </label>
          ))}

          <label className="block font-semibold mt-4 mb-2">How often do you get career guidance?</label>
          {['Regularly', 'Occasionally', 'Rarely', 'Never'].map((opt) => (
            <label key={opt} className="block ml-2 cursor-pointer mb-2">
              <input
                type="radio"
                name="careerGuidance"
                value={opt}
                checked={formData.careerGuidance === opt}
                onChange={handleChange}
              />{" "}{opt}
            </label>
          ))}

          <label className="block font-semibold mt-4 mb-2">Access to scholarships/support programs?</label>
          {['Yes', 'No', 'I am not aware of any such programs'].map((opt) => (
            <label key={opt} className="block ml-2 cursor-pointer mb-2">
              <input
                type="radio"
                name="scholarshipAccess"
                value={opt}
                checked={formData.scholarshipAccess === opt}
                onChange={handleChange}
                required
              />{" "}{opt}
            </label>
          ))}

          <label className="block font-semibold mt-4 mb-2">Most lacking facilities</label>
          {[
            'Clean classrooms',
            'Computer labs',
            'Library',
            'Sports/Gym',
            'Hostel',
            'Sanitary facilities',
            'Career counseling',
            'Other'
          ].map((facility) => (
            <label key={facility} className="block ml-2 cursor-pointer mb-2">
              <input
                type="checkbox"
                value={facility}
                checked={formData.lackingFacilities.includes(facility)}
                className="mr-2"
                onChange={(e) => handleCheckboxChange(e, 'lackingFacilities')}
              />{facility}
            </label>
          ))}

          <label className="block font-semibold mt-4 mb-2">If you could improve one thing...</label>
          <input
            name="improvementSuggestion"
            type="text"
            value={formData.improvementSuggestion}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-6"
            maxLength={300}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 cursor-pointer hover:bg-green-700 text-white font-semibold py-3 rounded"
          >
            Submit Survey
          </button>

          {error && <p className="text-red-600 mt-4 text-center text-lg">{error}</p>}
          {success && <p className="text-green-600 mt-4 text-center text-lg">Survey submitted successfully!</p>}
        </form>
      </div>

      <Footer />
    </div>
  );
}
