import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import logo from './../assets/images/logo.png'
import bgpackages from "./../assets/images/packages-bg.png"
import Footer from '../components/Footer/Footer'
import Package from '../components/Package/Package'
import activeIndicator from "../assets/images/ActiveIndicator.png"

const Packages = () => {
  return (
    <div>
        <NavBar menu={[{title:"Home", path:"/"},{title:"About", path:"/about"},{title:"Packages", path:"/packages"},{title:"Services",path:'/services'}]}  logo={logo} btn="Get in Touch"/>
        <Hero img={bgpackages} text2='Travel With Us' menu={["Home","About","Packages","Services"]} btn="Get in Touch"/> 
        <Package/>
        <Footer/>
    </div>
  )
}

export default Packages