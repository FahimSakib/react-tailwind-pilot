import React from 'react'

const Navbar = () => {
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
            </div>
        </nav>
    )
}

export default Navbar