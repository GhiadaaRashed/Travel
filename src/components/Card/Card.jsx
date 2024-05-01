
import './Card.css'
const card = ({img,title1,subtitle}) => {
  return (
    <div className="cardstyle">
      <img src={img} />
      <h3>{title1}</h3>
      <p>{subtitle}</p>
    </div>
  )
}

export default card