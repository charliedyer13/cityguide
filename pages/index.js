
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

export default function Home() {
  const [city, setCity] = useState('')
  const [showInfo, setShowInfo] = useState(false)

  const handleSearch = () => {
    if (city.toLowerCase() === 'denver') {
      setShowInfo(true)
    } else {
      setShowInfo(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <title>City Guide</title>
      </Head>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">City Guide</h1>
        <input
          type="text"
          placeholder="Enter a city (e.g., Denver)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>

        {showInfo && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Top Places to Visit</h2>
            <ul className="list-disc ml-5 mb-4">
              {denverData.attractions.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Places to Avoid</h2>
            <ul className="list-disc ml-5 mb-4">
              {denverData.avoid.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Hotels for Business Travelers</h2>
            <ul className="list-disc ml-5 mb-4">
              {denverData.hotels.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Coworking Spaces</h2>
            <ul className="list-disc ml-5 mb-4">
              {denverData.coworking.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Getting Around</h2>
            <ul className="list-disc ml-5">
              {denverData.transport.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
            <h2 className="text-xl font-semibold mb-2">Visiting the Main Office</h2>
            <p className="mb-2">
              Our Denver office is an easy-going, professional space designed for comfort and collaboration.
            </p>
            <ul className="list-disc ml-5 mb-4">
              <li>Business casual dress code</li>
              <li>Open-plan layout encourages teamwork</li>
              <li>C-suite executives have private offices</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">U.S. Visa Requirements</h2>
            <p className="mb-2">
              If you're visiting Denver from outside the U.S., you'll need to ensure proper visa arrangements.
            </p>
            <ul className="list-disc ml-5 mb-2">
              <li>
                <strong>Visa Waiver Program (VWP):</strong> Citizens of 41 countries can visit for up to 90 days without a visa but must obtain an ESTA.
              </li>
              <li>
                <strong>B-1 Visa:</strong> For business activities like meetings or conferences.
              </li>
              <li>
                <strong>B-2 Visa:</strong> For tourism, vacation, or visiting family/friends.
              </li>
            </ul>
            <p className="mb-4">
              To apply, complete Form DS-160, schedule a U.S. embassy interview, and bring required documents. For more, visit 
              <a href="https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html" className="text-blue-600 underline" target="_blank"> U.S. State Department - Visitor Visa</a>.
            </p>

