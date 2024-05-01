import TrendyCard from '../TrendyCard/TrendyCard'
import Texts from '../texts/Texts'
import './Trendy.css'
import n1 from "./../../assets/images/n1.png"
import trendyflag1 from "./../../assets/images/flag-1.png"
import n2 from "./../../assets/images/n2.png"
import trendyflag2 from "./../../assets/images/flag-2.png"
import n3 from "./../../assets/images/n3.png"
import trendyflag3 from "./../../assets/images/flag-3.png"
const dataCard=[{
  trendimg:n1,
  trendlogo:trendyflag1,
  num:"30",
  country:"Switzerland"
},{
  trendimg:n2,
  trendlogo:trendyflag2,
  num:"60",
  country:"Amazon"
},{
  trendimg:n3,
  trendlogo:trendyflag3,
  num:"120",
  country:"Giza"
}]
const Trendy = () => {
  return (
    <div className='trendy-parent'>
        <Texts title="TRENDY" sub="Our Trending Tour Packages"/>
        <div className="trendy-container">
        {
          dataCard.map((element,index)=>{
            return <TrendyCard key={index} trendimg={element.trendimg} trendlogo={element.trendlogo} num={element.num} country={element.country}/>
          })
        }
        </div>
    </div>
  )
}

export default Trendy