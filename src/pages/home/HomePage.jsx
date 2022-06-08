// the hero page
// this now become the parent componet for the title component

// title component imported here
import Title from "../../components/title/Title";

import "./homePage.css";

const HomePage = () => {

    return (
      
        <>
            {/* HomePage container  */}
            <section className="homePage">
                
                <div className="container">

                    <div className="row">

                        {/* using the component here */}
                        <Title subTitle = " WELCOME TO SHE REIGNS" title = "The Best Among The Rest"/>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatum ipsam, quas earum dolorem veniam voluptate obcaecati,
                            voluptas reiciendis animi minus suscipit vel odit error natus harum consequuntur asperiores! Voluptatem?
                        </p>

                        <div className="button">

                            {/* get started button  */}
                            <button className="primary-btn">CLICK TO STARTED
                                
                                <i className="fa fa-long-arrow-alt-right"></i>

                            </button>

                            {/* view course button  */}
                            <button>VIEW COURSE
                                
                                <i className="fa fa-long-arrow-alt-right"></i>

                            </button>

                        </div>

                    </div>

                </div>

            </section>
            {/* HomePage container ends here  */}

            {/* extra margin */}
            <div className="Margin"></div>
            
        </>
        
    )
    
}

export default HomePage

