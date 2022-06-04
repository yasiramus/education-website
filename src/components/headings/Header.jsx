// the header components

// importation of useState
import { useState } from "react";

// Link importation from react-router-dom 
import { Link } from "react-router-dom";

// import Container from reactstrap
// import { Container } from "reactstrap";

// the head component that is chicld component 
import Head from "./Head";

// hearder.css
import "./headers.css";

function Header() {

    // setting the state of click
    const [click, setClick] = useState(false);

    return ( 

        <>
            {/* head component  */}
            <Head />
            
            {/* navbar section start from here  */}
            <header>

                {/* main nav container   */}
                <nav className="flexSB">

                    {/* conditional rendering for css styles  */}
                    <ul  className = { click ? "mobile-nav" : "flexSB"} onClick = { () => setClick(false) }>
                    
                        <li><Link to = "/">Home</Link></li>
                        
                        <li><Link to = "/courses">All Courses</Link></li>
                        
                        <li><Link to = "/about">About</Link></li>

                        <li><Link to = "/team">Teams</Link></li>
                        
                        <li><Link to = "/pricing">Pricing</Link></li>

                        <li><Link to = "/journal">Journal</Link></li>
                        
                        <li><Link to = "/contact">Contact</Link></li>

                    </ul>    

                        {/* get started text  */}
                    <div className="start">

                        <div className="button">GET CERTIFIED</div>

                    </div>

                    {/* toggle button  */}
                    <button className="toggle" onClick={ () => setClick(!click)}>

                            {/* conditional rendering for times and bars icons  */}
                        { click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i> }

                    </button>

                </nav>

            </header>

        </>

     )
    
}

export default Header;