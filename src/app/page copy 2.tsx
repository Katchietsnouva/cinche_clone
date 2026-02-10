import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Main Hero Section */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Cinch Markets – Turning idle land into income</h1>
        <h2 className="text-2xl font-semibold mb-4">Turning idle land into income</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Want to generate income from your idle Land? Join Cinch and earn more money instantly, with no risk to you!
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>

      {/* Supply Chain Section */}
      <section className="py-8 px-4 bg-gray-100 text-center">
        <p className="text-lg max-w-2xl mx-auto">
          Secure your supply chain with Cinch. We create purpose built irrigated farms to meet your raw material needs
        </p>
      </section>

      {/* Features List */}
      <section className="py-8 px-4 text-center">
        <ul className="list-disc list-inside max-w-md mx-auto text-left text-lg">
          <li>Seed Replication</li>
          <li>Domestic Vegetables</li>
          <li>Export Vegetables</li>
        </ul>
      </section>

      {/* Investors Section */}
      <section className="py-8 px-4 text-center border-t border-gray-300">
        <h3 className="text-2xl font-semibold mb-4">Our Investors</h3>
        {/* Add investor logos or details here if available; original site has a horizontal line but no specifics */}
        <hr className="w-16 mx-auto border-gray-500" />
        {/* Placeholder: You can add images or text for investors if you have more info */}
        <p className="text-md mt-4">Details coming soon.</p>
      </section>
    </div>
  )
}

export default page
