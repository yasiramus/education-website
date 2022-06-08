// course home components

import "./courses.css";

// back components 
import Back from "../../components/back/Back";

// course card components 
import CourseCard from "./CourseCard";

const CourseHome = () => {

    return (
      
        <>

            <Back Title={"Explore Courses "} />

            <CourseCard/>
            
        </>
        
    )
    
}

export default CourseHome
