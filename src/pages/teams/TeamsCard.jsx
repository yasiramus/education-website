// team card component

// importation of team from dummy data 
import { team } from "../../dummyData"

const TeamsCard = () => {

    return (
      
        <>
            
            {team.map((val, index) => (
                
                <div className="items shadow" key={index}>

                    <div className="img">
                        
                        <img src={val.cover} alt={val.cover} />

                        <div className="overlay">

                              {/* social media handle section  */}

                            <i className="fab fa-facebook-f icon "></i>

                            <i className="fab fa-instagram icon "></i>

                            <i className="fab fa-twitter icon "></i>

                            <i className="fab fa-tiktok icon "></i>

                        </div>

                    </div>

                    <div className="details">

                        <h2>{val.name}</h2>

                        <p>{val.work}</p>
                        
                    </div>

                </div>

            ))}

        </>
        
    )
    
}

export default TeamsCard
