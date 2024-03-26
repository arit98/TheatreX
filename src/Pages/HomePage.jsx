import React from 'react'
import HeroSection from '../Components/HeroSection'
import TrendingSection from '../Components/TrendingSection'
import PopularSection from '../Components/PopularSection'
import TopRated from '../Components/TopRated'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrendingSection />
      <PopularSection />
      <TopRated />
      {/* <div className='h-[1000px]'></div> */}
    </div>
  )
}

export default HomePage