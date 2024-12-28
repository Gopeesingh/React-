import React from 'react';

export default function Clients() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Header Section */}
            <div className="text-center py-10 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-lg shadow-md">
                <h1 className="text-4xl font-extrabold sm:text-5xl">
                    Our Happy Clients
                </h1>
                <p className="text-lg sm:text-xl mt-4">
                    See what our clients are saying about their fitness journey with us.
                </p>
            </div>

            {/* Client Testimonials Section */}
            <div className="grid sm:grid-cols-3 gap-12 py-20 px-4 sm:px-10">
                {/* Client 1 */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <img
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Client 1"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
                    <p className="text-gray-600 mt-4 italic">
                        "I’ve never felt more energized and strong! The trainers are amazing, and the community is incredibly supportive."
                    </p>
                </div>

                {/* Client 2 */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <img
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        alt="Client 2"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
                    <p className="text-gray-600 mt-4 italic">
                        "I lost 20 pounds in just 3 months, and my confidence is at an all-time high. Highly recommend their personal training sessions!"
                    </p>
                </div>

                {/* Client 3 */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <img
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                        src="https://randomuser.me/api/portraits/women/46.jpg"
                        alt="Client 3"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
                    <p className="text-gray-600 mt-4 italic">
                        "I’ve been doing yoga here for months, and it’s transformed my flexibility and mental clarity. A great experience overall!"
                    </p>
                </div>

                {/* Client 4 */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <img
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                        src="https://randomuser.me/api/portraits/men/46.jpg"
                        alt="Client 4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Michael Brown</h3>
                    <p className="text-gray-600 mt-4 italic">
                        "Joining the fitness challenges was one of the best decisions I made! The progress I've made has been incredible."
                    </p>
                </div>

                {/* Client 5 */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <img
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                        src="https://randomuser.me/api/portraits/women/47.jpg"
                        alt="Client 5"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Sophia Lee</h3>
                    <p className="text-gray-600 mt-4 italic">
                        "The group classes are always fun, motivating, and challenging. I've made lasting friendships while getting fit!"
                    </p>
                </div>

                {/* Client 6 */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <img
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                        src="https://randomuser.me/api/portraits/men/47.jpg"
                        alt="Client 6"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">David Wilson</h3>
                    <p className="text-gray-600 mt-4 italic">
                        "I never thought I could enjoy working out, but the staff here makes it so much fun. I feel amazing after each session."
                    </p>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="text-center py-12 bg-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Join the Community!
                </h2>
                <p className="text-lg mt-4 text-gray-600">
                    Ready to experience the transformation? Become a part of our fitness family today!
                </p>
                <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-500 transform hover:scale-105 transition-all duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
}