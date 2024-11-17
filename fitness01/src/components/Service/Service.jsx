import React from 'react';

export default function Services() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Header Section */}
            <div className="text-center py-10 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white rounded-lg shadow-md">
                <h1 className="text-4xl font-extrabold sm:text-5xl">
                    Our Services
                </h1>
                <p className="text-lg sm:text-xl mt-4">
                    Explore the variety of fitness services we offer to help you achieve your health goals.
                </p>
            </div>

            {/* Service Cards Section */}
            <div className="grid sm:grid-cols-3 gap-12 py-20 px-4 sm:px-10">
                {/* Service 1 */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <img
                        className="w-16 h-16 mx-auto mb-4"
                        src="https://img.icons8.com/ios/4523/workout.png"
                        alt="Personal Training"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Personal Training</h3>
                    <p className="text-gray-600 mt-4">
                        Get one-on-one guidance from certified trainers who tailor fitness plans to your unique goals.
                    </p>
                </div>

                {/* Service 2 */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <img
                        className="w-16 h-16 mx-auto mb-4"
                        src="https://img.icons8.com/ios/4523/meal.png"
                        alt="Nutrition Coaching"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Nutrition Coaching</h3>
                    <p className="text-gray-600 mt-4">
                        Achieve your fitness goals faster with personalized meal plans designed by expert nutritionists.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <img
                        className="w-16 h-16 mx-auto mb-4"
                        src="https://img.icons8.com/ios/4523/group-of-people.png"
                        alt="Group Classes"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Group Classes</h3>
                    <p className="text-gray-600 mt-4">
                        Join our fun and energetic group classes that focus on fitness, wellness, and community support.
                    </p>
                </div>

                {/* Service 4 */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <img
                        className="w-16 h-16 mx-auto mb-4"
                        src="https://img.icons8.com/ios/4523/medal.png"
                        alt="Fitness Challenges"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Fitness Challenges</h3>
                    <p className="text-gray-600 mt-4">
                        Push yourself to new limits with our weekly and monthly fitness challenges that keep you motivated.
                    </p>
                </div>

                {/* Service 5 */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <img
                        className="w-16 h-16 mx-auto mb-4"
                        src="https://img.icons8.com/ios/4523/yoga.png"
                        alt="Yoga & Meditation"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Yoga & Meditation</h3>
                    <p className="text-gray-600 mt-4">
                        Relax and rejuvenate your body and mind with our yoga and meditation classes, designed for all levels.
                    </p>
                </div>

                {/* Service 6 */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <img
                        className="w-16 h-16 mx-auto mb-4"
                        src="https://img.icons8.com/ios/4523/heart-health.png"
                        alt="Health Monitoring"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Health Monitoring</h3>
                    <p className="text-gray-600 mt-4">
                        Keep track of your progress with our health monitoring services, including fitness assessments and tracking.
                    </p>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="text-center py-12 bg-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Ready to Get Started?
                </h2>
                <p className="text-lg mt-4 text-gray-600">
                    Whatever your fitness goals may be, we’re here to help. Let’s make it happen!
                </p>
                <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-500 transform hover:scale-105 transition-all duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
}
