import React from 'react'

const Frontpage = ({handleSmoothScroll , countdown}) => {
    return (
        <>
            <div>
                <section className={`flex flex-col md:flex-row items-center px-6 md:px-12 py-14 bg-white text-white`}>
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl leading-[1.1]  font-semibold mb-6 bg-gradient-to-tr from-green-300 via-green-400 to-green-700 text-transparent bg-clip-text p-2">
                       <span>{countdown}</span> Independence Day of Pakistan
                        </h2>
                        <p className="text-lg mb-6 bg-gradient-to-tl from-green-400 via-green-400 to-green-700  text-transparent bg-clip-text">
                            Pakistan celebrates its independence on 14th August every year. It marks the historic day in 1947 when Pakistan emerged as a sovereign nation.
                        </p>
                        <button className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-200 hover:text-green-400 transition" onClick={(e) => handleSmoothScroll(e, 'history')}>
                            Learn More
                        </button>
                    </div>
                    <div className="ml-0 md:mt-0 md:ml-2.5">
                        <img
                            src="independence-day-image.webp"
                            alt="Pakistan Flag"
                            className="rounded-lg border-2 w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-cover mx-auto"
                        />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Frontpage
