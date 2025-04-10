"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-green-100 backdrop-blur-md z-50 shadow-md">
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-700"><Link href='/dashboard'>EverHelp</Link></div>

      {/* Hamburger (mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-green-700 cursor-pointer focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation (desktop) */}
      <nav className="hidden md:flex gap-6 font-medium text-green-900">
        <a href="/survey" className="hover:text-green-600 transition">Survey</a>
        <a href="/stats" className="hover:text-green-600 transition">View Stats</a>
        <a href="/about" className="hover:text-green-600 transition">About Us</a>
        <a href="/contact" className="hover:text-green-600 transition">Contact</a>
      </nav>
    </div>

    {/* Mobile menu */}
    {isOpen && (
      <nav className="md:hidden px-4 pb-4 flex flex-col gap-2 font-medium text-green-900">
        <a href="/survey" className="hover:text-green-600 transition">Survey</a>
        <a href="/stats" className="hover:text-green-600 transition">View Stats</a>
        <a href="/about" className="hover:text-green-600 transition">About Us</a>
        <a href="/contact" className="hover:text-green-600 transition">Contact</a>
      </nav>
    )}
  </header>

  )
}

export default Header