// course home components

import "./courses.css";

// back components 
import Back from "../../components/back/Back";

// course card components 
import CourseCard from "./CourseCard";

import OnlineCourses from "./OnlineCourses";

const CourseHome = () => {

    return (
      
        <>

            <Back Title={"Explore Courses "} />

            <CourseCard/>

            <OnlineCourses/>
            
        </>
        
    )
    
}

export default CourseHome
