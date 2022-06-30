// contact component 
// back component importation 
import Back from '../../components/back/Back';

import "./contact.css";

// Contact card importation 
import ContactCard from './ContactCard';

const Contact = () => {

    return (
      
        <>
            
            <Back Title={"Contact Us"} />
            
            <ContactCard />
            
        </>
        
    )
    
}

export default Contact
