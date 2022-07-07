// footer component

// Link importation from react-router-dom 
import { Link } from "react-router-dom";

// importation of dummy data 
import { blog } from "../../dummyData";

// footer css importation 
import "./footer.css";

const Footer = () => {

    return (
      
        <>
            {/* newletter main container  */}
            <section className="newsLetter">
                
                <div className="container flexSB">

                    {/* Newsletter */}
                    <div className="left row">

                        <h1>Newsletter -Stay tune for the lastest update</h1>

                        <span>far far away, behind the world mountains in north east side of accra</span>

                    </div>

                    {/* input field section with the icon  */}
                    <div className="right row">

                        <input type="email" placeholder="Enter email address" />

                        {/* plane icon  */}
                        <i className="fa fa-paper-plane"></i>

                    </div>

                </div>

           </section>
            {/* newletter main container  end here*/}
            
            {/* footer section start from here */}
            <footer>

                {/* /* sub main container  */ }
                <div className="container">

                    {/* logo section  */}
                    <div className="box logo">

                        <h1>SHE REIGNS</h1>

                        <span>ONLINE EDUCATION FOR LEARNERS</span>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error totam est omnis illo, doloribus hic eveniet nesciunt, amet consectetur adipisicing elit. Error totam est omnis illo.</p>

                         {/* social media handle icons section  */}

                        <i className="fab fa-facebook-f icon"></i>

                        <i className="fab fa-instagram icon"></i>

                        <i className="fab fa-twitter icon"></i>

                        <i class="fa-brands fa-linkedin-in icon"></i>

                        {/* social media handle icons section  ends here  */}
                        
                    </div>
                    {/* logo section end here  */}

                    {/* explore section  */}
                    <div className="box link">

                        <h3>Explore Us</h3>

                        <ul>

                            <li><Link to = "/">Home</Link></li>
                            
                            <li><Link to = "/about">About Us</Link></li>
                            
                            <li><Link to = "/courses">Courses</Link></li>

                            <li><Link to = "/team">Teams</Link></li>
                        
                        </ul>

                    </div>
                    {/* explore us section ends here  */}

                    {/* quick link section  */}
                    <div className="box link">

                        <h3>Quick Link</h3>

                        <ul>

                            <li>Privacy Policy</li>   
                            
                            <li>FAQs</li>

                            <li><Link to = "/journal">Blog</Link></li>

                            <li>Terms and Conditions</li>

                        </ul>

                    </div>
                    {/* quick link section end here  */}

                    {/* blog post section  */}
                    <div className="box">

                        <h3>Recent Post</h3>

                        {blog.slice(0,3).map((val, index) => (
                        
                            <div className="item" key={index}>

                                <div className="img">

                                    <img src={val.cover} alt={val.cover} />
                                
                                </div>

                                <div className="text">

                                    {/* person section  */}
                                    <span>

                                        <i className="fa fa-user"></i>

                                        {/* user type meaning whether admin or user */}
                                        <label>{val.type}</label>

                                    </span>

                                    {/* date section  */}
                                    <span>

                                            {/* calendar section  */}
                                        <i className="fa fa-calendar-alt"></i>

                                        <label>{val.date}</label>    

                                    </span>

                                    {/* title  */}
                                    <h4>{val.title}</h4>
                                
                                </div>

                            </div>

                        ))}

                    </div>
                    {/* blog post section ends here  */}
                    
                    {/* have a question section  */}
                    <div className="box last">

                        <h3>Have QUESTIONS?</h3>

                        <ul>

                            <li>

                                {/* map icon  */}
                                <i className="fa fa-map"></i>
                                
                                <span>Exhale lounge 25-35 Garden Rd, Accra</span>

                            </li>

                            <li>

                                {/* phone icon  */}
                                <i className="fa fa-phone"></i>

                               <span>+233 501 863 922</span>

                            </li>

                            <li>

                                {/* plane icon  */}
                                <i className="fa fa-paper-plane"></i>

                               <span>info@sheReigns.com</span>

                            </li>

                        </ul>

                    </div>
                    {/* have a question section ends here  */}

                </div> 
                
            </footer>
            {/* footer section ends here */}


            {/* copy right section */}
            <div className="legal">

                <p>Copyright @ 2022 All right reserved | This web is made with 

                    <i className="fa fa-heart"></i> by Yasira Musah

                </p>

            </div>
            {/* copy right section end here  */}

        </>
        
    )
    
}

export default Footer
