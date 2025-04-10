'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(result.error || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('❌ Something went wrong.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-green-100 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30 z-10" />

        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-4">Get in Touch</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">Have questions, feedback, or want to collaborate? Reach out to us!</p>
        </div>
      </section>

      {/* Contact Section */}
      <main className="flex-grow px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition duration-200 cursor-pointer"
            >
              Send Message
            </button>
            {status && (
              <p className="text-sm mt-2 text-green-700 font-medium">{status}</p>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Info</h2>
            <p className="text-gray-700 text-lg">
              We'd love to hear from you! Whether it's a question, suggestion, or just a hello — we're always here to connect.
            </p>
            <div className="space-y-4 text-gray-700">
              <p><span className="font-semibold text-green-700">📧 Email:</span> contact@yourdomain.com</p>
              <p><span className="font-semibold text-green-700">📞 Phone:</span> +91 98765 43210</p>
              <p><span className="font-semibold text-green-700">📍 Location:</span> Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
