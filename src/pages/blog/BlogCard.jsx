// blog  card cmponent

import { blog } from "../../dummyData";

const BlogCard = () => {

    return (
      
        <>
      
            {blog.map((val, index) =>  (
                
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
            
        </>
        
    )
    
}

export default BlogCard
