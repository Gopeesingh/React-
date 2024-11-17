import React from 'react';

export default function About() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Header Section */}
            <div className="text-center py-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg shadow-md">
                <h1 className="text-4xl font-extrabold sm:text-5xl">
                    About Us
                </h1>
                <p className="text-lg sm:text-xl mt-4">
                    Learn more about our fitness journey and mission to inspire a healthier lifestyle.
                </p>
            </div>

            {/* About Content Section */}
            <div className="sm:flex sm:space-x-12 sm:py-20 py-10 px-4 sm:px-10">
                <div className="sm:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Our Mission
                    </h2>
                    <p className="text-lg mt-4 text-gray-600">
                        At FitnessWorld, we are committed to helping individuals transform their lives through fitness. We believe in providing high-quality fitness resources and motivation to empower everyone to achieve their personal health goals.
                    </p>
                </div>
                <div className="sm:w-1/2 mt-8 sm:mt-0">
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Why Choose Us?
                    </h2>
                    <ul className="mt-4 space-y-4 text-lg text-gray-600">
                        <li>✔️ Expert Tips & Guides</li>
                        <li>✔️ Personalized Fitness Plans</li>
                        <li>✔️ A Strong Community</li>
                        <li>✔️ Fitness Challenges & Events</li>
                        <li>✔️ Motivation & Support Every Step of the Way</li>
                    </ul>
                </div>
            </div>

            {/* Image Section */}
            <div className="text-center py-12 bg-gray-100">
                <img
                    className="w-full sm:w-3/4 mx-auto rounded-lg shadow-lg"
                    src="https://cdn.pixabay.com/photo/2016/11/18/16/42/woman-1833241_960_720.jpg"
                    alt="About Us"
                />
            </div>

            {/* Footer Section */}
            <div className="text-center py-10 bg-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Join Our Fitness Community Today!
                </h2>
                <p className="text-lg mt-4 text-gray-600">
                    Start your fitness journey with us, and let’s achieve greatness together.
                </p>
                <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-500 transform hover:scale-105 transition-all duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
}
