// frequently asked questions component

import { useState } from "react";

// Title component imporation 
import Title from "../../components/title/Title";

// frequently asked questions dummy data importation
import { faq } from "../../dummyData";

import "./faq.css";

const Faq = () => {
    
    const [click, setClick] = useState(false);

    const toggle = index => {

        click === index ?  setClick(null) : setClick(index)
    }

    return (
      
        <>
      
           <Title subTitle="FAQS" title="Frequent Ask Questions" />

            <section className="faq">

                <div className="container">

                    {faq.map((val, Index) => (
                        
                        <div className="box shadow" key={Index}>

                            <button className="accordion" onClick={() => toggle(Index)}>

                                <h2>{val.title}</h2>
                                
                                <span>{click === Index ? <i className="fa fa-chevron-down"></i> : <i className="fa fa-chevron-right"></i>}</span>
                                
                            </button>

                            {click === Index ? (
                                
                                <div className="text">

                                <p>{val.desc}</p>
                                
                                </div>
                                
                            ) : null }

                        </div>

                    ))}

                </div>

            </section>
        </>
        
    )
    
}

export default Faq
