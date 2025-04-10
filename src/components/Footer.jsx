import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-auto">
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <h3 className="text-xl font-bold mb-4">EverHelp</h3>
        <p className="text-sm">Your trusted partner in building smart, impactful surveys and dashboards for real-world solutions.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/survey" className="hover:underline">Surveys</a></li>
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
          <li><a href="/stats" className="hover:underline">View Stats</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Get in Touch</h4>
        <p className="text-sm mb-2">support@everhelp.io</p>
        <p className="text-sm">Fergusson College, Pune</p>
      </div>
    </div>
    <div className="bg-green-900 text-center text-sm py-4">© {new Date().getFullYear()} EverHelp. All rights reserved.</div>
  </footer>
  )
}

export default Footer