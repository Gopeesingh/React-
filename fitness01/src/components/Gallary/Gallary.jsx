import React from 'react';

export default function Gallery() {
    // Sample fitness-related image URLs
    const images = [
        "https://thebarbell.com/wp-content/uploads/2023/07/cbum-workout.png",
        "https://www.wilyeysports.com/wp-content/uploads/2022/12/Chris-Bumstead-wilyey-sports-wsports-classic-phisique-mr-olympia-wilyeysports.jpg",
        "https://i.pinimg.com/originals/5b/12/1f/5b121f2966bca2b4441120f2d3a3bba9.jpg",
        "https://i.pinimg.com/originals/79/e6/ad/79e6addfefcf569c38ff0ac725fa529a.jpg",
        "https://staticg.sportskeeda.com/editor/2023/11/5b5b5-16991915791504-1920.jpg",
        "https://breakingmuscle.com/wp-content/uploads/2023/10/chris-bumstead-shoulder-workout.jpg",
    ];

    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Header Section */}
            <div className="text-center py-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg shadow-md">
                <h1 className="text-4xl font-extrabold sm:text-5xl">
                    Fitness Gallery
                </h1>
                <p className="text-lg sm:text-xl mt-4">
                    Explore our collection of fitness inspirations.
                </p>
            </div>

            {/* Gallery Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-10">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                    >
                        <img
                            src={image}
                            alt={`Fitness ${index + 1}`}
                            className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                            <p className="text-white text-lg font-semibold">
                                Fitness Inspiration #{index + 1}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Section */}
            <div className="text-center py-10 bg-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Ready to Get Started?
                </h2>
                <p className="text-lg mt-4 text-gray-600">
                    Your fitness journey is just one step away.
                </p>
                <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-500 transform hover:scale-105 transition-all duration-300">
                    Join Now
                </button>
            </div>
        </div>
    );
}
