import './Promotion.css'

const Promotion = ({promotiontTitle,promotionSubtitle,promotionDescribe,promotionBtn,promotionImg}) => {
  return (
    <div className='promotion'>
        <div className='promotionData'>
            <p className='promotiontTitle'>{promotiontTitle}</p>
            <h1>{promotionSubtitle}</h1>
            <p className='promotionDescribe'>{promotionDescribe}</p>
            <button>{promotionBtn}</button>
        </div>
        <div>
            <img src={promotionImg}/>
        </div>
    </div>
  )
}

export default Promotion