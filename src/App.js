import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ChooseYourMs from './components/ChooseYourMs'
import Section2 from './components/Section2'
import GamePass from './components/GamePass'
import Section3 from './components/Section3'
import MSResponse from './components/MSResponse'
import ThisHoliday from './components/ThisHoliday'
import Social from './components/Social'
import Footer from './components/Footer'
import Showcase from './pages/microsoft_page/Showcase'
import LearnMore from './pages/microsoft_page/LearnMore'
import Video from './pages/microsoft_page/Video'

function App() {
  return (
    <Router>
      <Header />

      <Route path="/" exact>
        <Hero />
        <ChooseYourMs />
        <Section2 />
        <GamePass />
        <Section3 />
        <MSResponse />
        <ThisHoliday />
      </Route>
      <Route path="/microsoft-365">
        <Showcase />
        <Video />
        <LearnMore />
      </Route>

      <Social />
      <Footer />
    </Router>
  )
}

export default App
