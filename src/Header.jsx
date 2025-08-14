import React from 'react'

const Header = ({isMobileMenuOpen , handleSmoothScroll , toggleMobileMenu}) => {
  return (
    <>
       <nav className="relative flex justify-between items-center px-5 sm:px-5 py-4 bg-gradient-to-tr from-green-400 via-green-500 to-green-600 text-white shadow-md rounded-2xl ml-1.5 mr-1.5 mt-1.5">
        <h1 className="text-xl sm:text-2xl font-medium">Pakistan Day</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2">
          <a
            href="#history"
            onClick={(e) => handleSmoothScroll(e, "history")}
            className="transition-all duration-300 ease-in-out hover:text-green-200 hover:scale-110 px-2 py-1 rounded"
          >
            History
          </a>
          <a
            href="#leaders"
            onClick={(e) => handleSmoothScroll(e, "leaders")}
            className=" transition-all duration-300 ease-in-out hover:text-green-200 hover:scale-110 px-2 py-1 rounded"
          >
            Leaders
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleSmoothScroll(e, "gallery")}
            className=" transition-all duration-300 ease-in-out hover:text-green-200 hover:scale-110 px-2 py-1 rounded"
          >
            Gallery
          </a>
          <a
            href="#countdown"
            onClick={(e) => handleSmoothScroll(e, "countdown")}
            className="transition-all duration-300 ease-in-out hover:text-green-200 hover:scale-110 px-2 py-1 rounded"
          >
            Since years
          </a>
          <a
            href="#dat&time"
            onClick={(e) => handleSmoothScroll(e, "date&time")}
            className="transition-all duration-300 ease-in-out hover:text-green-200 hover:scale-110 px-2 py-1 rounded"
          >
            Date && time
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-green-600 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0  bg-gradient-to-tr from-green-600 via-green-500 to-green-600 bg-green-700 shadow-lg md:hidden z-50  mt-1.5 rounded-2xl">
            <div className="flex flex-col space-y-0">
              <a href="#history" onClick={(e) => handleSmoothScroll(e, "history")} className="px-4 py-3 rounded-2xl hover:bg-green-600 transition-colors border-b border-green-600">History</a>
              <a href="#leaders" onClick={(e) => handleSmoothScroll(e, "leaders")} className="px-4 py-3 rounded-2xl  hover:bg-green-600 transition-colors border-b border-green-600">Leaders</a>
              <a href="#gallery" onClick={(e) => handleSmoothScroll(e, "gallery")} className="px-4 py-3 rounded-2xl  hover:bg-green-600 transition-colors border-b border-green-600">Gallery</a>
              <a href="#countdown" onClick={(e) => handleSmoothScroll(e, "countdown")} className="px-4 py-3 hover:bg-green-600 rounded-2xl  transition-colors border-b border-green-600"> Since years</a>
              <a href="#date&time" onClick={(e) => handleSmoothScroll(e, "date&time")} className="px-4 py-3 hover:bg-green-600 rounded-2xl  transition-colors border-b border-green-600">Date & Time</a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Header
  