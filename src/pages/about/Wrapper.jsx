// wraper components 

// iimporting the wrapper dummy data 
import { awrapper } from "../../dummyData"

// wrapper css
import "./wrapper.css";

const Wrapper = () => {

    return (
      
        <>
            {/* wrapper for the background image  */}
            <section className="wrapper">
                
                <div className="container grid">
        
                    {/* mapping through the wrapper data to access individual data  */}
                    {awrapper.map( (val,index) => (
                        
                        <div className="box flex" key = {index}>

                            {/* image section  */}
                            <div className="img">

                                <img src={val.cover} alt={ val.cover}/>

                            </div>

                                {/* text section */}
                            <div className="text">

                                    {/* numbers section  */}
                                <h1>{val.data}</h1>
                                
                                {/* text  */}
                                <h3>{val.title}</h3>
                                
                            </div>

                        </div>

                    ))}
                    
                </div>

        </section>
            
        </>
        
    )
    
}

export default Wrapper
