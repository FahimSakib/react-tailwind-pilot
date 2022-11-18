import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-veryDarkBlue">
            <div className="container mx-auto flex flex-col-reverse justify-between px-6 py-10 space-y-8 md:space-y-0 md:flex-row">
                <div className="flex flex-col-reverse md:flex-col items-center md:items-start justify-between space-y-12 md:space-y-0">
                    <div className="mx-auto my-6 text-center text-white md:hidden">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                    <div>
                        <img src="img/logo-white.svg" alt="logo-white" className="h-8" />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="#">
                            <img src="img/icon-facebook.svg" alt="" class="h-8" />
                        </a>
                        <a href="#">
                            <img src="img/icon-youtube.svg" alt="" class="h-8" />
                        </a>
                        <a href="#">
                            <img src="img/icon-twitter.svg" alt="" class="h-8" />
                        </a>
                        <a href="#">
                            <img src="img/icon-pinterest.svg" alt="" class="h-8" />
                        </a>
                        <a href="#">
                            <img src="img/icon-instagram.svg" alt="" class="h-8" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" class="hover:text-brightRed">Home</a>
                        <a href="#" class="hover:text-brightRed">Pricing</a>
                        <a href="#" class="hover:text-brightRed">Products</a>
                        <a href="#" class="hover:text-brightRed">About</a>
                    </div>
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" class="hover:text-brightRed">Careers</a>
                        <a href="#" class="hover:text-brightRed">Community</a>
                        <a href="#" class="hover:text-brightRed">Privacy Policy</a>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <form >
                        <div className="flex space-x-3">
                            <input type="text" className="flex-1 px-4 rounded-full focus:outline-none"
                                placeholder="Updated in your inbox" />
                            <button class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                                Go
                            </button>
                        </div>
                    </form>
                    <div class="hidden text-white md:block">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer