import './AboutTrend.css'

const AboutTrend = ({AboutTrendTitle,AboutTrendSubtitle,AboutTrendDescribe,AboutTrendImg}) => {
  return (
    <div>
        <div className='AboutTrend'>
        <div>
            <img src={AboutTrendImg}/>
        </div>
        <div className='AboutTrendData'>
            <p className='AboutTrendTitle'>{AboutTrendTitle}</p>
            <h1>{AboutTrendSubtitle}</h1>
            <p className='AboutTrendDescribe'>{AboutTrendDescribe}</p>
            <div className="AboutTrendInfo">
                <div><span>78%</span><p>Vacations</p></div>
                <div><span>55%</span><p>Honeymoon</p></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutTrend