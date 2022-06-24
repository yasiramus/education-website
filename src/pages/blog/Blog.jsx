// blog component 

import Back from "../../components/back/Back";

import BlogCard from "./BlogCard";

import "./blog.css";

const Blog = () => {

    return (
      
        <>
            
            <Back Title={"Blog Posts"}/>

            <section className="blog Padding">

                <div className="container grid2">

                    <BlogCard />
                    
                </div>

            </section>
            
        </>
        
    )
    
}

export default Blog
