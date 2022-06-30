// home prices component 

import PriceCard from "../../pages/pricing/PriceCard"
import Title from "../title/Title"

const HomePrices = () => {

    return (
      
        <>
            
            <section className="HomePrices Padding">
                
                <Title subTitle={"our Prices"} title="Packages & Pricing"/>   

                <div className="Priced container grid">

                    {/* price card component being used here  */}
                    <PriceCard/> 

                </div>

            </section>
            
        </>
        
    )
    
}

export default HomePrices
