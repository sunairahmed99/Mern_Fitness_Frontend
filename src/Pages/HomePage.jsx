import React from 'react'
import '../App.css'
import Hero from '../components/Hero/Hero'
import Programs from '../components/Programs/Programs'
import Reasons from '../components/Reasons/Reasons'
import Testimonials from '../components/Testimonials/Testimonials'
import Join from '../components/Join/Join'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function HomePage() {
  return (
    <div className="App">
    <Navbar/>    
    <Hero/>
    <Programs/>
    <Reasons/>
    {/* <Plans/> */}
    <Testimonials/>
    <Join/>
    <Footer/>
  </div>
  )
}
