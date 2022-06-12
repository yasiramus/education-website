// teams component

// back Component
import Back from "../../components/back/Back"

import "./teams.css";

import TeamsCard from "./TeamsCard";

const Teams = () => {

    return (
      
        <>
            <Back Title="Our Teams" />

            <section className="Team Padding">

                <div className="container grid">

                    <TeamsCard />
                    
                </div>

            </section>
            
        </>
        
    )
    
}

export default Teams
