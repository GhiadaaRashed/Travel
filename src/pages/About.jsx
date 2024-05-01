import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import logo from './../assets/images/logo.png'
import bgabout from "./../assets/images/about-bg.png"
import Footer from '../components/Footer/Footer'
import Promotion from '../components/Promotion/Promotion'
import promotionImg from '../assets/images/promotion_img.png'
import Wanderlust from '../components/Wanderlust/Wanderlust'
import TourPlansImg from '../assets/images/TourPlans-img.png'
import AboutTrend from '../components/AboutTrend/AboutTrend'
const About = () => {
    return (
        <div>
            <NavBar menu={[{title:"Home", path:"/"},{title:"About", path:"/about"},{title:"Packages", path:"/packages"},{title:"Services",path:'/services'}]}  logo={logo} btn="Get in Touch"/>
            <Hero img={bgabout} text2='About Us' menu={["Home","About","Packages","Services"]} btn="Get in Touch"/> 
            <Promotion promotiontTitle='Promotion' promotionSubtitle='We Provide You Best Europe Sightseeing Tours' 
            promotionDescribe='Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
                Non quis eius quo eligendi corrupti et fugiat nulla qui 
                soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!' 
                promotionBtn='View Packages' promotionImg={promotionImg} />
            <Wanderlust/>
            <AboutTrend AboutTrendTitle='Trend'  AboutTrendSubtitle='Our Popular Tour Plans' 
            AboutTrendDescribe='Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.' 
            AboutTrendImg={TourPlansImg}/>
            <Footer/>
            
        </div>
    )
}

export default About