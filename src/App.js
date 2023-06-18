import React from 'react'
import Find from './Components/Find/Find'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Fahrer from './Components/Drive/Fahrer'
import Luxus from './Components/Luxus/Luxus'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Find/>
      <Fahrer/>
      <Luxus/>
      <Footer/>
    </div>
  )
}

export default App

