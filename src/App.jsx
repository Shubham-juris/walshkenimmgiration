import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Header from './Components/Header/Header'
import AboutUs from './Components/AboutUs/AboutUs'
import Blog from './Components/Blog/Blog'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'
import Chatbot from './Components/Chatbot/Chatbot'

import UnderMaintenance from './Components/Undermaintenance/UnderMaintenance'

function App() {


  return (
    <>
      <Header/>
     <Navbar/>
     <Hero/>
     <AboutUs/>
     <Blog/>
     <ContactUs/>
    <Footer/>
    <Chatbot/>
    <UnderMaintenance/>
    </>
  )
}

export default App
