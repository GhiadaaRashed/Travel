
import './Texts.css'
const Texts = ({title,sub}) => {
  return (
    <div className="texts">
        <p>{title}</p>
        <h1>{sub}</h1>
    </div>
  )
}

export default Texts