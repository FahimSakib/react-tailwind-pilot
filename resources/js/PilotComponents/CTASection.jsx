import React from 'react'

const CTASection = () => {
    return (
        <section id="cta" className="bg-brightRed">
            <div className="container flex flex-col items-center justify-between px-6 py-24 md:py-12 mx-auto space-y-12 md:space-y-0 md:space-x-12 md:flex-row">
                <h2 className="text-5xl md:text-4xl font-bold text-center md:text-left text-white md:max-w-md">
                    Simplify how your team works today
                </h2>
                <div>
                    <a href="#" className="p-3 px-6 pt-2 text-brightRed bg-white shadow-2xl rounded-full baseline hover:bg-gray-900 hover:text-white">
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CTASection