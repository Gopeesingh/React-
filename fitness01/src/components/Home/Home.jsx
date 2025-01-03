// import React from 'react'
// import { Link } from 'react-router-dom';

// export default function Home() {
//     return (
//         <div className="mx-auto w-full max-w-7xl">
//             <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
//                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
//                     <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
//                         <h2 className="text-4xl font-bold sm:text-5xl">
//                             Download Now
//                             <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
//                         </h2>

//                         <Link
//                             className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
//                             to="/"
//                         >
//                             <svg
//                                 fill="white"
//                                 width="24"
//                                 height="24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                             >
//                                 <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
//                             </svg>
//                             &nbsp; Download now
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
//                     <img className="w-96" src="https://tse1.mm.bing.net/th?id=OIP.SmYDmljRe2nNeltdVDl8HAHaGM&pid=Api&P=0&h=220" alt="image1" />
//                 </div>
//             </aside>

//             <div className="grid  place-items-center sm:mt-20">
//                 <img className="sm:w-96 w-48" src="https://images01.nicepagecdn.com/page/94/77/homepage-design-preview-94777.jpg" alt="image2" />
//             </div>

//             <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
//         </div>
//     );
// }


import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section */}
            <aside className="relative overflow-hidden rounded-lg sm:mx-16 mx-2 sm:py-16 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-700 text-white">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl space-y-8 text-center sm:text-left sm:ml-auto">
                        <h2 className="text-5xl font-extrabold sm:text-6xl">
                            Your Fitness Journey
                            <span className="block text-3xl font-medium mt-2">Starts Here</span>
                        </h2>
                        <p className="text-lg sm:text-xl mt-4">
                            Transform your body and mind with expert guidance and top-notch resources.
                        </p>

                        <Link
                            className="inline-flex items-center px-8 py-4 font-medium bg-orange-600 rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 transform hover:scale-105 transition-all duration-300"
                            to="/"
                        >
                            <svg
                                fill="currentColor"
                                className="mr-3"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Download Now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full h-full flex justify-center items-center opacity-70">
                    <img
                        className="object-cover sm:w-[70%] w-full rounded-lg"
                        src="https://cdn.pixabay.com/photo/2016/11/29/04/15/weights-1867745_960_720.jpg"
                        alt="Fitness Inspiration"
                    />
                </div>
            </aside>

            {/* Feature Image Section */}
            <div className="grid place-items-center sm:mt-20 mt-10">
                <img
                    className="sm:w-96 w-64 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                    src="https://cdn.pixabay.com/photo/2015/01/13/15/01/weights-598475_960_720.jpg"
                    alt="Gym Equipment"
                />
            </div>

            {/* Footer Section */}
            <h1 className="text-center text-3xl sm:text-5xl py-10 font-bold text-gray-800">
                "Push Yourself. No One Else Is Going To Do It For You."
            </h1>
        </div>
    );
}
