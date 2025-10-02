
import React, { useEffect,  useState } from 'react'

function Slider() {
    const images = [
        "/description1.png", "/description2.png"
    ];

    const [current , setCurrent] =useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev+1) % images.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrent((prev) => (prev+1) %images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev-1 + images.length) % images.length);
    };

    return (
            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-2xl shadow-lg my-20">
                <img src={images[current]}
                alt="slider"
                className="w-full h-64 object-cover transition-all duration-700 mx-40 my-20"/>

                <button onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800/70 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600">
                    ←
                </button>

                <button onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800/70 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600">
                    →
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <span key={index} onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${current === index ? "bg-red-500" : "bg-gray-400"}`}></span>
                ))}

                </div>
            </div>
        
    );
}

export default Slider