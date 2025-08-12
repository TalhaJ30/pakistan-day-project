import React from 'react'

const Footer = ({Date}) => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8 mt-16 text-center">
        <p>© {new Date().getFullYear()} Pakistan Independence Day. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer
