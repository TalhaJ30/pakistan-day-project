import React, { useState } from "react";

const Gallery = () => {
    const slides = [
        {
            id: 1,
            img: "celebration gallery1.webp",
            title: "Beautiful Landscape",
            desc: "Experience nature like never before."
        },
        {
            id: 2,
            img: "celebration galler 2.jpg",
            title: "Ocean Breeze",
            desc: "Feel the fresh ocean air."
        },
        {
            id: 3,
            img: "baja on rishka pic.jpg",
            title: "Mountain View",
            desc: "Reach new heights of adventure."
        }
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <>
            {/* <div>
               <h1>Celebration galler</h1>
            </div> */}
            <div className="relative w-full  mx-auto overflow-hidden mt-6">
                {/* Slides */}
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="w-full flex-shrink-0 relative">
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full   object-cover  rounded-2xl"
                            />

                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 -translate-y-1/2 left-3 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 p-2 rounded-full shadow"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 -translate-y-1/2 right-3 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 p-2 rounded-full shadow"
                >
                    ❯
                </button>


            </div>
        </>

    );
};

export default Gallery
