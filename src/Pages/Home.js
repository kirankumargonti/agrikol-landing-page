import React from 'react'
import AgricultureTypes from '../Components/AgricultureTypes'
import Banner from '../Components/Banner'
import DiscoverMore from '../Components/DiscoverMore'
import Farming from '../Components/Farming'
import GrowingProducts from '../Components/GrowingProducts'
import NewsAndArticles from '../Components/NewsAndArticles'
import OurProjects from '../Components/OurProjects'
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
      <OurProjects />
      <Farming />
      <GrowingProducts />
      <NewsAndArticles />
      <DiscoverMore />
    </div>
  )
}

export default Home
