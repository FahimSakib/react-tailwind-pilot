import React, { useState } from 'react'

const Navbar = () => {
    const [hamBurger, setHamBurger] = useState(false)
    return (
            <nav className="rlative container mx-auto p-6">
                <div className="flex items-center justify-between">
                    <div className="pt-2">
                        <img src="img/logo.svg" alt="logo" />
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="hover:text-blue-600">Pricing</a>
                        <a href="#" className="hover:text-blue-600">Product</a>
                        <a href="#" className="hover:text-blue-600">About us</a>
                        <a href="#" className="hover:text-blue-600">Careers</a>
                        <a href="#" className="hover:text-blue-600">Community</a>
                    </div>
                    <a href="#" className="hidden md:block p-3 px-6 pt-2 text-white bg-red-700 rounded-full baseline hover:bg-red-500">
                        Get Started
                    </a>
                    {/* hamburger icon */}
                    <button onClick={() => setHamBurger(!hamBurger)} className="block hamburger md:hidden focus:outline-none">
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
                {/* mobile menu */}
                <div className="md:hidden">
                    {hamBurger && <div className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                        <a href="#">Pricing</a>
                        <a href="#">Product</a>
                        <a href="#">About Us</a>
                        <a href="#">Carrers</a>
                        <a href="#">Community</a>
                    </div>}
                </div>
            </nav>
    )
}

export default Navbar