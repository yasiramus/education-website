// footer component

import { blog } from "../../dummyData";
import "./footer.css";

const Footer = () => {

    return (
      
        <>
            
            <section className="newsLetter">
                
                <div className="container flexSB">

                    <div className="left row">

                        <h1>Newsletter -Stay tune and get the lastest update</h1>

                        <span>far far away, behind the world mountains</span>

                    </div>

                    {/* input field section with the icon  */}
                    <div className="right row">

                        <input type="text" placeholder="Enter email address" />

                        {/* plane icon  */}
                        <i className="fa fa-paper-plane"></i>

                    </div>

                </div>

           </section>
            
            <footer>

                <div className="container Padding">

                    {/* logo section  */}
                    <div className="box logo">

                        <h1>SHE REIGNS</h1>

                        <span>ONLINE EDUCATION FOR LEARNERS</span>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error totam est omnis illo, doloribus hic eveniet nesciunt.</p>

                         {/* social media handle icons section  */}

                        <i className="fab fa-facebook-f icon "></i>

                        <i className="fab fa-instagram icon "></i>

                        <i className="fab fa-twitter icon "></i>

                        <i class="fa-brands fa-linkedin-in icon"></i>

                    </div>

                      {/* explore section  */}
                    <div className="box link">

                        <h3>Explore Us</h3>

                        <ul>

                            <li>About Us</li>

                            <li>About Us</li>

                            <li>About Us</li>

                            <li>About Us</li>

                        </ul>

                    </div>

                    {/* link section  */}
                    <div className="box link">

                        <h3>Quick Link</h3>

                        <ul>

                            <li>About Us</li>

                            <li>About Us</li>

                            <li>About Us</li>

                            <li>About Us</li>

                        </ul>

                    </div>

                    {/* blog post section  */}
                    <div className="box">

                        <h3>Recent Post</h3>

                        {blog.slice(0,3).map((val, index) => (
                        
                            <div className="items flexSB" key={index}>

                                <div className="img">

                                    <img src={val.cover} alt={val.cover} />
                                
                                </div>

                                <div className="text">

                                    {/* person section  */}
                                    <span>

                                        <i className="fa fa-user"></i>

                                        <label>{val.type}</label>

                                    </span>

                                    {/* date section  */}
                                    <span>

                                            {/* calendar section  */}
                                        <i className="fa fa-calendar-alt"></i>

                                        <label>{val.date}</label>

                                    </span>

                                    <h4>{val.title}</h4>
                                
                                </div>

                            </div>

                        ))}

                    </div>
                    
                    {/* have a question section  */}
                    <div className="box last">

                        <h3>Have a QUESTIONS?</h3>

                        <ul>

                            <li>

                                {/* map icon  */}
                                <i className="fa fa-map"></i>
                                
                                Exhale lounge 25-35 Garden Rd, Accra

                            </li>

                            <li>

                                {/* phone icon  */}
                                <i className="fa fa-phone-alt"></i>

                                +233 501 863 922

                            </li>

                            <li>

                                {/* plane icon  */}
                                <i className="fa fa-paper-plane"></i>

                                info@gmail.com

                            </li>

                        </ul>

                    </div>

                </div> 
                
            </footer>

              {/* copy right section */}
            <div className="legal">

                <p>Copyright @2022 All right reserved | This web is made with

                    <i className="fa fa-heart"></i> by Yasira Musah

                </p>

            </div>

        </>
        
    )
    
}

export default Footer
