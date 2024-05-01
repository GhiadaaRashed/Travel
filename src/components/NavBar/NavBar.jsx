
import { useState } from 'react'
import './NavBarStyle.css'
import {  NavLink } from 'react-router-dom'

const NavBar = ({logo,menu,btn}) => {
  const [color,setcolor]=useState(false)
  const changecolor =()=>{
    if(window.scrollY >= 200){
      setcolor(true)
    }
    else{
      setcolor(false)
    }
  }
  window.addEventListener("scroll",changecolor)
  const [x, setx] = useState(false)
  return (
    <div className={color? 'NavBar NavBarBg':'NavBar'}>
      <div>
        <img src={logo} />
      </div>
        <div id='slide' className={x? "active":""}>
        <svg onClick={()=>{setx(false)}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M11.7679 10.0002L19.6342 2.13472C20.1225 1.64642 20.1225 0.854731 19.6342 0.366469C19.1459 -0.121831 18.3543 -0.121831 17.866 0.366469L10.0005 8.23279L2.13496 0.366469C1.64666 -0.121831 0.854975 -0.121831 0.366714 0.366469C-0.121548 0.85477 -0.121587 1.64646 0.366714 2.13472L8.23303 10.0002L0.366714 17.8658C-0.121587 18.3541 -0.121587 19.1457 0.366714 19.634C0.855014 20.1223 1.6467 20.1223 2.13496 19.634L10.0005 11.7676L17.866 19.634C18.3543 20.1223 19.1459 20.1223 19.6342 19.634C20.1225 19.1457 20.1225 18.354 19.6342 17.8658L11.7679 10.0002Z" fill="#DF6951"/>
        </svg>
        <div className='style'>
        <ul >
        {menu.map((e,i)=>{
          return(
            <li key={i}><NavLink to={e.path} className={({isActive})=>isActive? "":""}>{e.title} <img src={e.img} alt="" /></NavLink></li>
          )
        })}
      </ul>
      <button>{btn}</button>
        </div>
        </div>
      <svg onClick={()=>{
        setx(!x)
      }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    
  )
}
export default NavBar