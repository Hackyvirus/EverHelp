"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-green-100 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30 z-10" />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">Get to know who we are, what drives us, and where we’re headed.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-20">

          {/* Who We Are */}
          <section>
            <h2 className="text-3xl font-bold text-green-800 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are a team of educators, developers, and changemakers dedicated to improving access to quality education through data, technology, and meaningful insights. Our mission is rooted in bridging the gap between students’ challenges and actionable solutions.
            </p>
          </section>

          {/* What We Do */}
          <section>
            <h2 className="text-3xl font-bold text-green-800 mb-4">What We Do</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our platform collects survey data directly from students, analyzing their real-world educational challenges — from curriculum gaps to access issues. We transform this data into clear, impactful visualizations for institutions, policymakers, and communities to act upon.
            </p>
          </section>

          {/* Vision & Mission */}
          <section>
            <h2 className="text-3xl font-bold text-green-800 mb-4">Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To create a future where every student, regardless of location or background, has access to equitable and quality education empowered by data.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To amplify the voices of students, identify educational barriers through data, and enable institutions to make informed, student-first decisions.
                </p>
              </div>
            </div>
          </section>

          {/* Upcoming Features */}
          <section>
            <h2 className="text-3xl font-bold text-green-800 mb-4">Upcoming Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
              <li>Interactive regional reports for state-wise educational challenges</li>
              <li>Anonymous student feedback dashboard for institutions</li>
              <li>College-readiness insights for students based on survey patterns</li>
              <li>Real-time graphs for admin dashboards</li>
              <li>Partner integration portal for NGOs & government bodies</li>
              <li>AI-powered suggestion engine to recommend improvements</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
