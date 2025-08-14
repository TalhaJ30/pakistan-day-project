import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-tr grid justify-center items-center from-green-400 via-green-500 to-green-600 text-white rounded-2xl mb-4 ml-2.5 mr-2.5 py-8 mt-10 text-center relative">
        
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-2 mb-4">
          <span className="inline-flex items-center gap-2  font-semibold text-lg text-white">
            {/* Pakistan Flag SVG */}
            <img src="download (1).png" alt="Pakistan image" className='h-10 w-10'/>
            Independence Day of Pakistan
          </span>
          <span className="text-white">|</span>
          <span className="text-white">Celebrating Unity, Faith, Discipline</span>
        </div>
        <div className="mb-4">
          <p className="text-green-400 font-normal text-lg bg-white ml-2 mr-2 rounded-2xl p-3">
            Developed by <span className="font-semibold text-green-600">Muhammad Talha Javed</span> &mdash; Passionate Frontend Developer
          </p>
          <p className="text-gray-500 text-base mt-1   bg-white ml-2 mr-2 rounded-2xl p-3">
            This site is a tribute to Pakistan's Independence Day, celebrated every year on <span className="text-green-400 font-bold">14th August</span>.
            <br />
            Let's remember the sacrifices of our ancestors and cherish the freedom of our beloved homeland. Pakistan Zindabad! 🇵🇰
          </p>
        </div>
        <p className="text-green-800  bg-white ml-2 mr-2 rounded-2xl p-3">
          © {new Date().getFullYear()} Pakistan Independence Day. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default Footer
