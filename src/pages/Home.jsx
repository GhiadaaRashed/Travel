import Category from "../components/Category/Category"
import Explore from "../components/Explore/Explore"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import NavBar from "../components/NavBar/NavBar"
import Trendy from "../components/Trendy/Trendy"
import logo from "./../assets/images/logo.png"
import bghero from "./../assets/images/header-bg.png"

const home = () => {
  return (
    <div>
      <NavBar menu={[{title:"Home", path:"/"},{title:"About", path:"/about"},{title:"Packages", path:"/packages"},{title:"Services",path:'/services'}]}  logo={logo} btn="Get in Touch"/>
      <Hero img={bghero} text="NO MATTER WHERE YOU’RE GOING TO, WE’LL TAKE YOU THERE" menu={["Home","About","Packages","Services"]} btn="Get in Touch"/> 
      <Category />
      <Explore/>
      <Trendy/>
      <Footer/>
    </div>
  )
}

export default home