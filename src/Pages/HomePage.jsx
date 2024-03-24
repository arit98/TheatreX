import React from 'react'
import HeroSection from '../Components/HeroSection'
import Carousel from '../Components/Carousel'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Carousel title="Trending" />
      <div className='h-[1000px]'></div>
    </div>
  )
}

export default HomePage