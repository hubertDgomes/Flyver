import React from 'react'
import Header from '../layouts/Header'
import Banner from '../layouts/Banner'
import Country from '../Country'
import StoryCountry from '../layouts/StoryCountry'
import Feature from '../Feature'
import Experience from '../layouts/Experience'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <StoryCountry/>
      <Experience/>
    </div>
  )
}

export default Home
