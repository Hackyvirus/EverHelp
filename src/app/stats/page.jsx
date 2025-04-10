"use client";
import { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A020F0', '#FF6666'];

// Filter valid suggestions
export default function SurveyStats() {
  const [data, setData] = useState([]);
  const [showAllSuggestions, setShowAllSuggestions] = useState(false);
  const suggestions = data.filter(d => d.oneThingToImprove);
  const suggestionsToShow = showAllSuggestions ? suggestions : suggestions.slice(0, 10);

  useEffect(() => {
    fetch('/api/surveys')
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);

  const getAgeGroups = () => {
    const groups = {
      '1–10': 0,
      '11–18': 0,
      '19–23': 0,
      '24–30': 0,
      '31–40': 0,
      '40+': 0,
    };
    data.forEach(({ age }) => {
      if (age <= 10) groups['1–10']++;
      else if (age <= 18) groups['11–18']++;
      else if (age <= 23) groups['19–23']++;
      else if (age <= 30) groups['24–30']++;
      else if (age <= 40) groups['31–40']++;
      else groups['40+']++;
    });
    return Object.entries(groups).map(([name, value]) => ({ name, value }));
  };

  const getFrequency = (key) => {
    const counts = {};
    data.forEach(d => {
      const value = d[key];
      if (Array.isArray(value)) {
        value.forEach(v => counts[v] = (counts[v] || 0) + 1);
      } else {
        counts[value] = (counts[value] || 0) + 1;
      }
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      <Header />

      <section className="relative md:h-40 h-32 w-full bg-center bg-green-800 bg-cover flex items-end justify-center text-white">

        <h1 className="text-3xl md:text-6xl  font-bold mb-4">Survey Statistics</h1>

      </section>

      <main className="flex-grow px-4 py-8 md:py-16 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-green-900 text-center mb-6 md:mb-12">Overview</h2>

          <div className="text-center mb-12">
            <p className="text-lg text-gray-700">Total Responses: <strong>{data.length}</strong></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">Age Group Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={getAgeGroups()}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">Gender Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={getFrequency('gender')}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                    dataKey="value"
                  >
                    {getFrequency('gender').map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">Education Status</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={getFrequency('educationStatus')}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#FFBB28" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">Curriculum Preparedness</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={getFrequency('curriculumPreparedness')}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#00C49F" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">Career Guidance Frequency</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={getFrequency('careerGuidance')}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#FF8042" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">Scholarship Access</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={getFrequency('scholarshipAccess')}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                    dataKey="value"
                  >
                    {getFrequency('scholarshipAccess').map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Challenges */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Top Challenges Faced</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {getFrequency('biggestChallenges').map((item, i) => (
                <li key={i}><strong>{item.name}</strong>: {item.value}</li>
              ))}
            </ul>
          </div>

          {/* Lacking Facilities */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Most Lacking Facilities</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {getFrequency('lackingFacilities').map((item, i) => (
                <li key={i}><strong>{item.name}</strong>: {item.value}</li>
              ))}
            </ul>
          </div>

          {/* Suggestions */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Suggestions for Improvement</h3>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {suggestionsToShow.map((d, i) => (
                <li key={i}>{d.oneThingToImprove}</li>
              ))}
            </ul>

            {/* Show more button (only if more than 10) */}
            {suggestions.length > 10 && (
              <div className="mt-4 text-center">
                <button
                  className="text-green-700 font-medium underline cursor-pointer hover:text-green-900"
                  onClick={() => setShowAllSuggestions(!showAllSuggestions)}
                >
                  {showAllSuggestions ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}