import React , { useState } from 'react'
import { Link } from "react-scroll";

import hero from '../assets/Hero.png'


const HeroSection = () => {
    const [navbar, setNavbar] = useState(false);
  return (
    <div className="text-white font-sans" style={{
        background: "linear-gradient(#e66465, #9198e5)"
      }}>

        {/* Nav Bar */}


        <nav className="w-full pt-10 ">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 sm:py-2 md:block">
                 
                        <a href="/">
                            <h2 className="text-2xl font-bold text-white">LOGO</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-purple-700 rounded-md outline-none focus:border-purple-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div name="about"
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-2 sm:space-x-0 sm:space-y-0 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">

                            <Link to="about" smooth={true} duration={500}>
                            About Us
                  </Link>
                               
                            </li>
                            <li className="text-white hover:text-indigo-200">
                            <Link to="services" smooth={true} duration={500}>
                            Services
                  </Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                            <Link to="caseStudies" smooth={true} duration={500}>
                            Case Studies
                  </Link>
                               
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="/">Blog</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="/">How it Works</a>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <a href="/">Hire</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:hidden sm:inline-block">
                        <button
                className="hover:scale-110 duration-500 bg-purple-900 text-white font-bold rounded-full  py-2 px-6">
                Contact US
              </button>

                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                 
                <button
                className="hover:scale-110 duration-500 bg-purple-900 text-white font-bold rounded-full  py-4 px-6 lg:py-4 lg:px-6 md:py-2 md:px-4">
               Contact Us
              </button>
                </div>
            </div>
        </nav>
        {/* hero section */}
        <div data-aos="zoom-in"  className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src={hero} />
          <div className="text-center lg:w-5/12 w-full">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Turn your designs into production-ready frontend
            </h1>
            <p className="text-2xl mb-8">
              Ship products 5-10x faster with your existing design tools, tech stacks & workflows!
            </p>
            <div className="flex justify-center mx-auto">
              <button
                className="hover:underline bg-white text-purple-800 font-bold rounded-full  py-4 px-8">
                View Projects
              </button>
           
            </div>
          </div>
        </div>
      </div >
  )
}

export default HeroSection