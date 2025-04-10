"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const features = [
    {
      title: "Create Surveys",
      description: "Design surveys with custom questions and logic.",
      image: "https://source.unsplash.com/featured/?survey,form"
    },
    {
      title: "Analytics",
      description: "Visualize responses and analyze trends easily.",
      image: "https://source.unsplash.com/featured/?data,analytics"
    },
    {
      title: "User Management",
      description: "Manage accounts and permissions effortlessly.",
      image: "https://source.unsplash.com/featured/?user,profile"
    },
    {
      title: "Track Progress",
      description: "Monitor response rates and engagement in real-time.",
      image: "https://source.unsplash.com/featured/?progress,report"
    },
    {
      title: "Secure & Private",
      description: "All data is encrypted and stored securely.",
      image: "https://source.unsplash.com/featured/?security,data"
    },
    {
      title: "24/7 Support",
      description: "Get assistance anytime from our expert team.",
      image: "https://source.unsplash.com/featured/?support,customer"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      {/* Navbar */}
      <Header />
      {/* Hero */}
      <section className="relative h-screen w-full bg-center bg-cover flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center z-0" />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Your Dashboard</h1>
          <p className="text-lg max-w-2xl mx-auto">Track your progress, manage surveys, and gain insights – all in one place.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-16">Dashboard Features</h2>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

              <div className="rounded-xl bg-white shadow-md hover:shadow-lg transition overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                  alt="Survey Management"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Survey Management</h3>
                  <p className="text-gray-700">Create, customize, and manage surveys in real-time with ease and flexibility.</p>
                </div>
              </div>

              <div className="rounded-xl bg-white shadow-md hover:shadow-lg transition overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
                  alt="Live Analytics"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Live Analytics</h3>
                  <p className="text-gray-700">Track user activity, monitor engagement, and make data-driven decisions.</p>
                </div>
              </div>

              <div className="rounded-xl bg-white shadow-md hover:shadow-lg transition overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&w=800&q=80"
                  alt="Profile Customization"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Profile Customization</h3>
                  <p className="text-gray-700">Personalize your dashboard, manage preferences, and keep your profile updated.</p>
                </div>
              </div>

              <div className="rounded-xl bg-white shadow-md hover:shadow-lg transition overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                  alt="Team Collaboration"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Team Collaboration</h3>
                  <p className="text-gray-700">Invite your team to work together, assign roles, and collaborate seamlessly.</p>
                </div>
              </div>

              <div className="rounded-xl bg-white shadow-md hover:shadow-lg transition overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
                  alt="Fully Responsive"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Fully Responsive</h3>
                  <p className="text-gray-700">Works beautifully across devices. Get full functionality on mobile and tablets.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
 <Footer/>
    </div>
  );
}
