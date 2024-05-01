import './Package.css'
import city1 from '../../assets/images/city-1.png'
import city2 from '../../assets/images/city-2.png'
import city3 from '../../assets/images/city-3.png'
import city4 from '../../assets/images/city-4.png'
import city5 from '../../assets/images/city-5.png'
import city6 from '../../assets/images/city-6.png'
import PackageCard from '../PackageCard/PackageCard'

const packageMenu=[{cityImage:city1,day:'27',month:'September',year:'2023',packageCity:'Maldives',count:'30',price:'3000',review:'5.0'},
{cityImage:city2,day:'13',month:'October',year:'2023',packageCity:'Switzerland',count:'120',price:'1290',review:'4.9'},
{cityImage:city3,day:'2',month:'November',year:'2022',packageCity:'Berlin',count:'139',price:'2790',review:'5.0'},
{cityImage:city4,day:'14',month:'December',year:'2022',packageCity:'Torronto',count:'50',price:'1110',review:'4.0'},
{cityImage:city5,day:'20',month:'September',year:'2022',packageCity:'Baku',count:'80',price:'1220',review:'4.5'},
{cityImage:city6,day:'27',month:'August',year:'2022',packageCity:'Chinese',count:'100',price:'2500',review:'5.0'}]
const Package = () => {
  return (
    <div className="main">
        <div className='mainPackage'>
            {packageMenu.map((element,index)=>{
                return <PackageCard key={index} cityImage={element.cityImage} day={element.day} month={element.month} year={element.year} packageCity={element.packageCity} count={element.count} price={element.price} review={element.review}/>
                })}
        </div>
    </div>
  )
}

export default Package