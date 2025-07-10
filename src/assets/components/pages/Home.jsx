import React from 'react'
import Header from '../layouts/Header'
import Banner from '../layouts/Banner'
import Country from '../Country'
import StoryCountry from '../layouts/StoryCountry'
import Feature from '../Feature'
import Experience from '../layouts/Experience'
import Offer from '../layouts/Offer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <StoryCountry/>
      <Experience/>
      <Offer/>
    </div>
  )
}

export default Home
