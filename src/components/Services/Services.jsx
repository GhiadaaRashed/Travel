import React from 'react'
import NavBar from '../NavBar/NavBar'
import logo from "./../../assets/images/logo.png"
import Hero from '../Hero/Hero'
import bgabout from "./../../assets/images/about-bg.png"
import activeIndicator from "./../../assets/images/ActiveIndicator.png"

const Services = () => {
  return (
    <div>
        <NavBar menu={[{title:"Home", path:"/"},{title:"About", path:"/about"},{title:"Packages", path:"/packages"},{title:"Services",path:'/services'}]}  logo={logo} btn="Get in Touch"/>
        <Hero img={bgabout} text2='Services' menu={["Home","About","Packages","Services"]} btn="Get in Touch"/>
    </div>
  )
}

export default Services