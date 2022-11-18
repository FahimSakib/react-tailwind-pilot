import FeaturesSection from '@/PilotComponents/FeaturesSection'
import HeroSection from '@/PilotComponents/HeroSection'
import Navbar from '@/PilotComponents/navbar'
import TestimonialsSection from '@/PilotComponents/TestimonialsSection'
import React from 'react'

const pilot = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
    </>
  )
}

export default pilot