// contact card component 

const ContactCard = () => {

    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15882.113393185125!2d-0.1670703307932403!3d5.636402538677077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b59caa46fad%3A0xd1fef56a352e9ec6!2sExhale%20lounge!5e0!3m2!1sen!2sgh!4v1656199636329!5m2!1sen!2sgh";

    return (
      
        <>
      
            <section className="contact Padding">

                <div className="container shadow flexSB">

                    <div className="left row">

                        <iframe src={map}  title={map} loading="lazy" frameborder="0"></iframe>

                    </div>

                    {/* contact section  */}
                    <div className="right row">

                        <h1>Contact Us</h1>

                        <p>Blanditiis sunt iste harum dolorum id ad nihil deserunt necessitatibus minus enim odio?</p>

                        <div className="items grid2">

                            <div className="box">

                                <h4>ADDRESS: </h4>

                                <p>Exhale lounge 25-35 Garden Rd, Accra </p>

                            </div>

                            <div className="box">

                                <h4>Email: </h4>

                                <p>info@sheReigns.com</p>

                            </div>

                            <div className="box">

                                <h4>Phone: </h4>

                                <p> +233 501 863 922</p>

                            </div>

                        </div>

                        <form>

                            <div className="flexSB">

                                <input type="text" placeholder="Name" />
                                
                                <input type="email" placeholder="Email"/>

                            </div>

                            <input type="text" placeholder="Subject" />
                            
                            <textarea cols="30" rows="10">
                                
                                Write a message here...

                            </textarea>

                            <button className="primary-btn">SEND A MESSAGE</button>

                        </form>

                        <h3>Follow us here</h3>

                        <span>FACEBOOK TWITTER INSTAGRAM LINKEDIN</span>

                    </div>

                </div>

            </section>
        </>
      
    )
    
}

export default ContactCard
