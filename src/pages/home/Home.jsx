// the home page
// importation of the HomePage components 
import HomePage from "./HomePage"

import AboutCard from "../about/AboutCard";

import HomeAbout from "./HomeAbout";

import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {

    return (
      
        <>
            
            <HomePage />  
            
            <AboutCard />

            <HomeAbout />
            
            <Testimonial/>
            
        </>
        
    )
    
}

export default Home
