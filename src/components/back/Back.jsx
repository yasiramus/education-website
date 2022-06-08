import { useLocation, } from "react-router-dom"

import "./back.css";

const Back = ({Title}) => {

  const location = useLocation();
  
    // const naviget = useNavigate()
  
  return (

    <>
      <section className="back">
        
              <h2>Home /  {location.pathname.split("/")[1]}</h2>
              
        <h1>{Title}</h1>
        
      </section>

      {/* extra margin */}
      <div className="Margin"></div>
      
    </>
  )
}

export default Back
