import { testimonal } from "../../dummyData"

import Title from "../title/Title"

import "./testimonial.css";

// testimonial Component 
const Testimonial = () => {

    return (
      
        <>
            
            <section className="testimonial Padding">

                <div className="container">

                    <Title subTitle={"testimonial"} title="our successful past student" />

                    <div className="content grid2">

                        {testimonal.map((val, index) => (
                            
                            <div className="items shadow" key={index}>

                                <div className="box flex">

                                    <div className="img">

                                        <img src={val.cover} alt={val.cover} />

                                        <i className="fa fa-quote-left icon"></i>

                                    </div>

                                    <div className="name">

                                        <h2>{val.name}</h2>

                                        <span>{val.post}</span>
                                        
                                    </div>

                                </div>

                                <p>{ val.desc}</p>

                            </div>
                        ))}

                    </div>
                    
                </div>

            </section>

        </>
        
    )
    
}

export default Testimonial
