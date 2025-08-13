import React, { useState, useEffect } from 'react'

const Countdown = ({countdown}) => {
 

  return (
    <>
       <section id="countdown" className="px-6 md:px-20 py-8 mt-6 bg-green-100 rounded-2xl ml-2.5 mr-2.5 text-green-800 text-center">
        <h3 className="text-3xl font-medium mb-4">Years Since Pakistan's Independence</h3>
        <p className="text-2xl mb-6">This is Pakistan's {countdown} Independence Day.</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-green-700">Historical Significance</h4>
              <p className="text-green-800 mb-3">
                On August 14, 1947, Pakistan emerged as an independent nation after the partition of British India. 
                This historic day marked the fulfillment of the Two-Nation Theory and the creation of a homeland for Muslims of the subcontinent.
              </p>
              <p className="text-green-800">
                Quaid-e-Azam Muhammad Ali Jinnah became Pakistan's first Governor-General, leading the nation through its formative years.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-green-700">National Achievements</h4>
              <ul className="text-green-800 space-y-2">
                <li>• World's 5th largest population</li>
                <li>• Nuclear power status</li>
                <li>• Rich cultural heritage</li>
                <li>• Strategic geopolitical position</li>
                <li>• Growing economy and technology sector</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-green-700">Celebration Traditions</h4>
            <p className="text-green-800 mb-4">
              Independence Day is celebrated with great enthusiasm across Pakistan. The day begins with the hoisting of the national flag 
              at government buildings, followed by parades, cultural events, and fireworks. People decorate their homes and vehicles 
              with the national flag and green colors, symbolizing the Islamic Republic's identity.
            </p>
            <p className="text-green-800">
              Special prayers are offered for the prosperity and security of the nation, and various cultural programs showcase 
              Pakistan's diverse traditions and achievements.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Countdown
