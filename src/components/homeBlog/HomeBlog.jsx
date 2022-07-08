
import Title from "../title/Title"

import { blog } from "../../dummyData";

import "./homeblog.css";

const HomeBlog = () => {

    return (
      
        <>
      
        <section className="blog">
              
              <div className="container" id="homeBlog">
                  
                <Title subTitle={"our blog"} title="recent from our blog" />
                  
                    {/* blog section which has been sliced  */}
                <div className="grid2">
                      
                    {blog.slice(0,3).map((val, index) =>  (
                
                        <div className="items shadow" key={index}>

                            <div className="img">
                        
                                <img src={val.cover} alt={val.cover} />
                            
                            </div>   

                            <div className="text">
    
                                <div className="addmin flexSB">

                                    {/* person section  */}
                                    <span>

                                        <i className="fa fa-user"></i>

                                        <label>{val.type}</label>

                                    </span>

                                    {/* date section  */}
                                    <span>

                                        <i className="fa fa-calendar-alt"></i>

                                        <label>{val.date}</label>

                                    </span>
                            
                                    {/* comment section  */}
                                    <span>

                                        <i className="fa fa-comments"></i>

                                        <label>{val.com}</label>

                                    </span>

                                </div>

                                {/* title and description section 65y */}
                                <h1>{ val.title}</h1>

                                <p>{ val.desc}</p>
                        
                            </div>
                        
                        </div>

                    ))}
                      
                </div>

            </div>

        </section>

            </>
      
    )
    
}

export default HomeBlog
