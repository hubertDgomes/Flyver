import React from 'react'
import Header from '../layouts/Header'
import Banner from '../layouts/Banner'
import Country from '../Country'
import StoryCountry from '../layouts/StoryCountry'
import Feature from '../Feature'
import Experience from '../layouts/Experience'
import Offer from '../layouts/Offer'
import TipsPart from '../layouts/TipsPart'
import Review from '../layouts/Review'
import ComBanner from '../layouts/ComBanner'
import Limit from '../layouts/Limit'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <StoryCountry/>
      <Experience/>
      <Offer/>
      <TipsPart/>
      <Review/>
      <ComBanner/>
      <Limit/>
    </div>
  )
}

export default Home
