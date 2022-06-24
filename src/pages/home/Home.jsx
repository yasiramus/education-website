// the home page
// importation of the HomePage components 
import HomePage from "./HomePage"

import AboutCard from "../about/AboutCard";

import HomeAbout from "./HomeAbout";

import Testimonial from "../../components/testimonial/Testimonial";
import HomeBlog from "../../components/homeBlog/HomeBlog";

const Home = () => {

    return (
      
        <>
            
            <HomePage />  
            
            <AboutCard />

            <HomeAbout />
            
            <Testimonial/>

            <HomeBlog/>
            
        </>
        
    )
    
}

export default Home
