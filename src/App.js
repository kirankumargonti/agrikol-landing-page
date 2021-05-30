import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Pages
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import News from './Pages/News'
import OurProjects from './Pages/OurProjects'
import Services from './Pages/Services'
import Shop from './Pages/Shop'
import Pages from './Pages/Pages'
import NotFound from './Pages/NotFound'

// components
import Header from './Components/Header'
import Footer from './Components/Footer'
import ArrowUp from './Components/ArrowUp'

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/ourprojects' component={OurProjects} />
          <Route path='/shop' component={Shop} />
          <Route path='/pages' component={Pages} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Switch>
        <ArrowUp />
        <Footer />
      </Router>
    </div>
  )
}

export default App
