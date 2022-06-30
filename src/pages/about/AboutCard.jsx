// about card components

// importatiuon of the title components 
import Title from "../../components/title/Title";

import  {homeAbout}  from "../../dummyData";

import Wrapper from "./Wrapper";

import "./aboutCard.css";

const AboutCard = () => {

    return (
      
        <>

        <section className="aboutHome">
        
          <div className="container flexSB">

            <div className="left row">

              <img src="./Images/happystudent.jpg" alt="about" />

            </div>

            <div className=" right row">

              <Title subTitle=" STUDY AT YOUR COMFORT ZONE" title="Benefits About Online Learning Expertise" />

              <div className="items">

                { homeAbout.map(val => 
                
                  <div className="item flexSB" key={val.id}>
  
                    <div className="img">
                      
                      <img src={val.cover} alt={ val.cover}/>
                      
                    </div>
  
                    <div className="text">

                      <h2>{val.title}</h2>

                      <p>{val.desc}</p>
                      
                    </div>

                  </div>
                
                )}
              </div>
              
            </div>

          </div>

        </section> 
      
        <Wrapper />
        
        </>
        
    )
    
}

export default AboutCard
