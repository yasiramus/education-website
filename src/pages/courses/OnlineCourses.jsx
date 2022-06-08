// online courses components

import "./onlineCourses.css";

// importation of the title component 
import Title from "../../components/title/Title";

// online course dummy data 
import { online } from "../../dummyData";

const OnlineCourses = () => {

    return (

        <>

            <section className = "onlineCourses">

                <div className="container">

                    <Title subTitle="COURSES" title="Browse Through Our Online Courses" />

                    <div className="content grid3">
                        
                        {online.map((val, index )=> (
                            
                            <div className="box" key={index}>
                                
                                <div className ="img">
                                    
                                    <img src={val.cover} alt={val.cover}/>

                                    <img src={val.hoverCover} alt={val.hoverCover} className="show" />
                                    
                                </div>

                                <h1>{ val.courseName }</h1>

                                <span>{ val.course }</span>


                            </div>

                        )) }
                        
                    </div>
                    
                </div>

            </section>
            
        </>

    )

}

export default OnlineCourses;