// price component 

import Back from "../../components/back/Back";

// price card component importation 
import PriceCard from "./PriceCard";

// css 
import "./price.css"; 
import Faq from "./Faq";

const Price = () => {

    return (
      
        <>
            
            <Back Title={"Choose THE Right Plan"} />

            <section className="Priced Padding">

                <div className="container grid">

                    {/* price card component being used here  */}
                    <PriceCard/> 

                </div>

            </section>

            <Faq/>

        </>
        
    )
    
}

export default Price
