import ExploreCard from '../ExploreCard/ExploreCard'
import './Explore.css'
import Nature from "../../assets/images/e1.png"
import Cities from "../../assets/images/e2.png"
const Explore = () => {
  return (
    <div className='style'>
        <div className='card'>
        <ExploreCard image={Nature} tit='Promotion' subtit='Explore Nature' btn='View Packages'/>
        </div>
        <div className='card'>
        <ExploreCard image={Cities} tit='Promotion' subtit='Explore Cities' btn='View Packages'/>
        </div>
    </div>
  )
}

export default Explore