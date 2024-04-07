import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Header() {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const location  = useLocation().pathname;

    return (

        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/017/221/436/small_2x/spaghetti-with-vegetables-cooking-in-a-pan-png.png" className="h-14" alt="RecipeKing" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">RecipeKing</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none" aria-controls="navbar-default" aria-expanded="false" onClick={()=>{setNavbarOpen((prev)=>!prev)}}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full sm:block sm:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 sm:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 rtl:space-x-reverse sm:mt-0 sm:border-0 sm:bg-white ">
                        <li>
                            <Link to="home" className={`block py-2 px-3 text-black hover:text-blue-900 bg-blue-700 rounded sm:bg-transparent sm:${location==="/" || location==="/home"?'text-blue-700':'text-black'} sm:p-0 `} aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/search" className={`block py-2 px-3 text-black hover:text-blue-900 bg-blue-700 rounded sm:bg-transparent sm:${location==="/search"?'text-blue-700':'text-black'} sm:p-0 `}>Search</Link>
                        </li>
                    </ul>
                </div>

                <div className={`w-full ${navbarOpen?'block':'hidden'} sm:hidden fixed top-[70px] left-0`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 sm:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 rtl:space-x-reverse sm:mt-0 sm:border-0 sm:bg-white ">
                        <li>
                            <Link to="/home" className={`block py-2 px-3 rounded ${location==="/" || location==="/home"?'text-white bg-blue-700':'text-black bg-white'} sm:p-0 `} aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/search" className={`block py-2 px-3 rounded ${location==="/search"?'text-white bg-blue-700':'text-black bg-white'} sm:p-0 `}>Search</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    )
}

export default Header