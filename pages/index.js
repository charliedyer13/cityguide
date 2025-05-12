
import Head from 'next/head'
import { useState } from 'react'

const denverData = {
  city: "Denver",
  attractions: [
    "Red Rocks Amphitheatre",
    "Denver Art Museum",
    "Union Station",
    "Denver Botanic Gardens"
  ],
  avoid: [
    "Some areas in Five Points at night",
    "Colfax Avenue east of downtown"
  ],
  hotels: [
    "The Crawford Hotel",
    "Grand Hyatt Denver",
    "The Jacquard, Autograph Collection"
  ],
  coworking: [
    "Industrious Denver",
    "WeWork – 16th Street",
    "Alchemy Creative Workspace"
  ],
  transport: [
    "Uber/Lyft widely available",
    "Denver RTD Light Rail",
    "Scooters and bike shares"
  ]
}

const Section = ({ title, content }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold text-blue-800 mb-2">{title}</h2>
    {Array.isArray(content) ? (
      <ul className="list-disc ml-6 text-gray-700">
        {content.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    ) : (
      <div className="text-gray-700">{content}</div>
    )}
  </div>
)

export default function Home() {
  const [city, setCity] = useState('')
  const [showInfo, setShowInfo] = useState(false)

  const handleSearch = () => {
    setShowInfo(city.toLowerCase() === 'denver')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">
      <Head>
        <title>Denver City Guide</title>
      </Head>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Denver City Guide</h1>
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Enter a city (e.g., Denver)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {showInfo && (
          <div className="space-y-4">
            <Section title="Top Places to Visit" content={denverData.attractions} />
            <Section title="Places to Avoid" content={denverData.avoid} />
            <Section title="Hotels for Business Travelers" content={denverData.hotels} />
            <Section title="Coworking Spaces" content={denverData.coworking} />
            <Section title="Getting Around" content={denverData.transport} />
            <Section
              title="Visiting the Main Office"
              content={
                <ul className="list-disc ml-6">
                  <li>Business casual dress code</li>
                  <li>Open-plan layout encourages teamwork</li>
                  <li>C-suite executives have private offices</li>
                </ul>
              }
            />
            <Section
              title="U.S. Visa Requirements"
              content={
                <div>
                  <ul className="list-disc ml-6 mb-2">
                    <li><strong>Visa Waiver Program (VWP):</strong> 90-day stay with ESTA for eligible countries.</li>
                    <li><strong>B-1 Visa:</strong> Business activities like meetings or conferences.</li>
                    <li><strong>B-2 Visa:</strong> Tourism or visiting family/friends.</li>
                  </ul>
                  <p>More info: <a href="https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html" target="_blank" className="text-blue-600 underline">U.S. State Department</a></p>
                </div>
              }
            />
          </div>
        )}
      </div>
    </div>
  )
}
