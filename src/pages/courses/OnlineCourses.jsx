// online courses components

// online course css importation 
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
                        
                        {/* this coming from the dummy data  */}
                        {online.map((val, index )=> (
                            
                            <div className="box" key={index}>
                                
                                {/* image container for png images  */}
                                <div className ="img">
                                    
                                    {/* same images with different colors  */}
                                    <img src={val.cover} alt={val.cover}/>

                                    <img src={val.hoverCover} alt={val.hoverCover} className="show" />
                                    
                                </div>

                                {/* course title  */}
                                <h1>{ val.courseName }</h1>

                                {/* number of course video  */}
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