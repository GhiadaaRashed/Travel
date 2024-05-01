import "./HeroStyle.css"

const Hero = ({img,text,text2}) => {
    return (
        <div className="hero" style={{backgroundImage:`url(${img})`}}>
            <p>{text}</p>
            <h1>{text2}</h1>
        </div>
    )
}

export default Hero