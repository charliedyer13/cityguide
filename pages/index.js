
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
