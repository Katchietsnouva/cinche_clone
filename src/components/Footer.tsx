import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-teal-600 text-white py-8 px-4 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left: Logo and Tagline */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl font-[cursive] mb-1">Cinch</h1> {/* Cursive font */}
            <p className="text-sm">Turning idle land into income</p>
          </div>

          {/* Right: Contact Info */}
          <div className="text-right">
            <h3 className="text-sm font-semibold mb-2">CONTACT INFO</h3>
            <p className="text-sm mb-1">
              <span className="inline-block w-4 h-4 mr-2">✉️</span> {/* Mail icon placeholder; use SVG or Heroicons */}
              info@cinchmarkets.com
            </p>
            <p className="text-sm mb-4">
              <span className="inline-block w-4 h-4 mr-2">📍</span> {/* Location pin icon */}
              Kenya • Ghana • USA
            </p>
            <div className="flex justify-end space-x-4">
              <a href="#" className="text-white hover:text-gray-300"> {/* LinkedIn */}
                <span className="inline-block w-4 h-4">🔗</span> {/* Placeholder; use actual icon */}
              </a>
              <a href="#" className="text-white hover:text-gray-300"> {/* YouTube */}
                <span className="inline-block w-4 h-4">▶️</span> {/* Placeholder */}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright and Domain Bubble */}
        <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 Cinch Markets, Inc.</p>
          <div className="mt-4 md:mt-0 relative">
            <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-xs">
              cinchmarkets.com
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
