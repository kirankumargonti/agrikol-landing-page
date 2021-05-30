import React from 'react'
import AgricultureTypes from '../Components/AgricultureTypes'
import Banner from '../Components/Banner'
import DiscoverMore from '../Components/DiscoverMore'
import GrowingProducts from '../Components/GrowingProducts'
import NewsAndArticles from '../Components/NewsAndArticles'
import Services from '../Components/Services'
import Sponsors from '../Components/Sponsors'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Sponsors />
      <AgricultureTypes />
      <Testimonials />
      <GrowingProducts />
      <NewsAndArticles />
      <DiscoverMore />
    </div>
  )
}

export default Home
