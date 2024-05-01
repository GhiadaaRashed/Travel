import "./Category.css"
import Card from "../Card/Card"
import giud from "./../../assets/images/service-1.png"
import flight from "./../../assets/images/service-2.png"
import tours from "./../../assets/images/service-3.png"
import medical from "./../../assets/images/service-4.png"
import Texts from "../texts/Texts"
const Category = () => {
    return (
        <div className="Category">
            <div>
                <Texts title="CATEGORY" sub="We Offer Best Services"/>
            </div>
            <div className="cards">
                    <Card img={giud}  title1="Guided Tours" subtitle="sunt qui repellat saepe quo velit aperiam id aliquam placeat."/>
                    <Card img={flight}  title1="Best Flights Options" subtitle="sunt qui repellat saepe quo velit aperiam id aliquam placeat."/>
                    <Card img={tours}  title1="Religious Tours" subtitle="sunt qui repellat saepe quo velit aperiam id aliquam placeat."/>
                    <Card img={medical}  title1="Medical insurance" subtitle="sunt qui repellat saepe quo velit aperiam id aliquam placeat."/>
                
            </div>
        </div>
    )
}


export default Category
/*                     cards.map((element)=>{
                        return (
                            <Card text={element.endex}/>
                        )
                    }) */