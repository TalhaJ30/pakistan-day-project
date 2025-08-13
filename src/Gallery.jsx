import React, { useState } from "react";

const Gallery = () => {
    const slides = [
        {
            id: 1,
            img: "celebration gallery1.webp",

        },
        {
            id: 2,
            img: "baja on rishka pic.jpg",
        },
        {
            id: 3,
            img: "celebration galler 2.jpg",
        },
        {
            id: 4,
            img: "62f861869d896_876.jpg",
        },
        {
            id: 5,
            img: "302815_9611396_updates.webp",
        },
        {
            id: 6,
            img: "14.jpg",
        },
        {
            id: 7,
            img: "2022-08_pakistan-day_04.jpg",

        },
        {
            id: 8,
            img: "2022-08_pakistan-day_04 (1).jpg",

        },

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
            <div className="flex justify-center items-center mt-6">
                <div className="w-[100%] h-auto grid justify-center items-center bg-green-100 rounded-2xl ml-1.5 mr-1.5 pt-4 pb-4 pl-2 pr-2">
                    <h1 className="text-center text-2xl md:text-3xl font-medium text-green-700">Celebration galler</h1>
                    <p className="text-center">Here are some pictures that prove that Pakistani people celebrate their Independence Day with great joy.</p>
                </div>
            </div>

            <div className="relative w-[97.5%]  mx-auto overflow-hidden mt-3">
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
