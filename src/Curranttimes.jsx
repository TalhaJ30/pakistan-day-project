import React, { useState, useEffect } from 'react'

const Curranttimes = () => {
    const [isIndependenceDay, setIsIndependenceDay] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date())

    // This function checks if the current time is exactly 14th August at 12:00 AM (midnight)
    const isAugust14Midnight = (date) => {
        // date: Date object to check
        return (
            date.getMonth() === 7 && // August (0-indexed)
            date.getDate() === 14 &&
            date.getHours() === 0 &&
            date.getMinutes() === 0 &&
            date.getSeconds() === 0
        );
    };
    const isAugust15Midnight = (date) => {
        // date: Date object to check
        return (
            date.getMonth() === 7 && // August (0-indexed)
            date.getDate() === 15 &&
            date.getHours() === 0 &&
            date.getMinutes() === 0 &&
            date.getSeconds() === 0
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            if (isAugust14Midnight(now)) {
                alert("It's 14th August, 12:00 AM! Reloading the page to celebrate Independence Day!");
                window.location.reload();
            }
            if (isAugust15Midnight(now)) {
                alert("It's 15th August, 12:00 AM! Hope you had a good Independence Day celebration.");
                window.location.reload();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const checkDate = () => {
            const now = new Date()
            const month = now.getMonth() + 1 // getMonth() returns 0-11, so add 1
            const date = now.getDate()

            if (month === 8 && date === 14) {
                setIsIndependenceDay(true);

            } else {
                setIsIndependenceDay(false)
            }

            // Function to check if it's August 14th at 12:00 AM and alert to reload the page


            setCurrentTime(now)
        }

        checkDate()
        const interval = setInterval(checkDate, 1000) // Check every second



        return () => clearInterval(interval)
    }, [])


    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    }

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const getCountdownToIndependenceDay = () => {
        const now = new Date()
        const currentYear = now.getFullYear()
        let independenceDay = new Date(currentYear, 7, 14) // Month is 0-indexed, so 7 = August

        // If Independence Day has passed this year, calculate for next year
        if (now > independenceDay) {
            independenceDay = new Date(currentYear + 1, 7, 14)
        }

        const timeDifference = independenceDay - now

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

        return { days, hours, minutes, seconds }
    }

    if (isIndependenceDay) {
        return (
            <div className="relative  overflow-hidden rounded-2xl mt-4 ml-2.5 mr-2.5">
                {/* Background Video (optional, can be commented out if you want pure green) */}
                <video
                    src="Green and White Illustrative Welcome August Instagram Post (1).mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
                >
                    Your browser does not support the video tag.
                </video>

                {/* Green overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30 z-10"></div>

                {/* Content Container */}
                <div className="relative z-20  flex items-center justify-center p-16 rounded-2xl">
                    <div className="text-center text-green-50 max-w-6xl mx-auto">
                        {/* Fireworks Animation */}
                        <div className="mb-8 animate-bounce">

                            <div className="text-5xl md:text-7xl animate-spin">✨</div>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-3xl md:text-6xl lg:text-8xl font-medium mb-6 text-green-300 drop-shadow-2xl animate-pulse">
                            Happy Independence Day!
                        </h1>

                        {/* Pakistan Flag Colors */}
                        <div className="flex justify-center mb-8">
                            <div className="w-3 md:w-6 h-16 md:h-24 bg-green-600 mr-1 md:mr-2 rounded-l-full"></div>
                            <div className="w-3 md:w-6 h-16 md:h-24 bg-white mr-1 md:mr-2"></div>
                            <div className="w-3 md:w-6 h-16 md:h-24 bg-green-600 rounded-r-full"></div>
                        </div>

                        {/* Subtitle */}
                        <p className="text-2xl md:text-4xl lg:text-5xl mb-8 text-green-100 font-semibold drop-shadow-lg">
                            Pakistan Zindabad! 🇵🇰
                        </p>

                        {/* Celebration Message */}
                        <div className="bg-green-500/40 backdrop-blur-md rounded-3xl p-5 md:p-10 mb-8 max-w-6xl sm:max-w-4xl mx-auto border border-green-200/30 shadow-2xl">
                            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-normal text-green-50">
                                Today we celebrate the freedom and independence of our beloved nation.
                                Let us remember the sacrifices of our forefathers and work together
                                for a brighter future. Pakistan Zindabad!
                            </p>
                        </div>

                        {/* Current Time and Date */}
                        <div className="bg-green-900/200 backdrop-blur-md rounded-2xl p-3 md:p-8 inline-block border border-green-200/20 shadow-xl ">
                            <div className="text-2xl md:text-4xl lg:text-5xl font-mono text-green-200  font-bold">
                                {formatTime(currentTime)}
                            </div>
                            <div className="text-lg md:text-xl ml-1 mr-1 lg:text-2xl text-green-100 font-medium">
                                {formatDate(currentTime)}
                            </div>
                        </div>

                        {/* Additional Celebration Elements */}
                        <div className="mt-8 flex justify-center space-x-4 md:space-x-8">
                            <div className="text-4xl md:text-6xl animate-bounce">🎉</div>
                            <div className="text-4xl md:text-6xl animate-pulse">🏛️</div>
                            <div className="text-4xl md:text-6xl animate-bounce">🎊</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="  bg-gradient-to-r bg-green-100 rounded-2xl mt-3.5 flex items-center ml-2.5 mr-2.5 justify-center p-4">
            <div className="text-center text-white">


                <div className="bg-white  rounded-2xl p-6 mb-3">
                    <h1
                        className='text-green-800 sm:text-3xl font-semibold mb-4 text-2xl'
                        style={{ letterSpacing: '0.02em' }}
                    >
                        Remaining time
                    </h1>
                    <p className="text-xl md:text-2xl flex-wrap flex justify-center items-center text-green-500 font-normal text-center">
                        THE INDEPENDENCE DAY IS COMING AFTER <div className='text-green-700 border-2 min-w-auto border-white bg-green-100 pl-1.5 pr-1.5 pb-0.5 ml-1 mt-1 mb-1 mr-1 font-medium' style={{ borderRadius: "8px" }}>{getCountdownToIndependenceDay().days}  Days,</div> <div className='text-green-700 bg-green-100 pl-1.5 pr-1.5 pb-0.5 ml-1 mt-1 mb-1 mr-1 border-2 border-white font-medium' style={{ borderRadius: "8px" }}>{getCountdownToIndependenceDay().hours} Hours,</div> <div className='text-green-700 border-2  border-white bg-green-100 pl-1.5 pr-1.5 pb-0.5 ml-1 mt-1 mb-1 mr-1 font-medium' style={{ borderRadius: "8px" }}>{getCountdownToIndependenceDay().minutes} Minutes,</div> <div className='text-green-700 bg-green-100 pl-1.5 pr-1.5 ml-1 mt-1 mb-1 mr-1 border-2 border-white pb-0.5 font-medium' style={{ borderRadius: "8px" }}>{getCountdownToIndependenceDay().seconds} Seconds.</div> I HOPE YOU ARE WAITING FOR INDEPENDENCE DAY.
                    </p>
                </div>
                <div className='mb-4'>
                <h1
                        className='text-green-800 sm:text-3xl font-semibold mb-2 mt-5 text-2xl'
                        style={{ letterSpacing: '0.02em' }}
                    >
                        Date <span className='text-green-600 font-medium'>&</span> Time
                    </h1>
                <div className="bg-white  rounded-2xl p-3 md:p-8 inline-block border border-green-200/20 shadow-xl ">
                            <div className="text-2xl md:text-4xl lg:text-5xl font-mono text-green-800  font-bold">
                                {formatTime(currentTime)}
                            </div>
                            <div className="text-lg md:text-xl ml-1 mr-1 lg:text-2xl text-green-800 font-medium">
                                {formatDate(currentTime)}
                            </div>
                        </div>
                </div>

                <div className="text-xl text-green-800 ">
                    <p>Independence Day is celebrated on August 14th</p>
                </div>
            </div>
        </div>
    )
}

export default Curranttimes
