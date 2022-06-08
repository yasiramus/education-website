// title component which is the child component
// this because we are passing data from the Hero compnent to this component

import "./title.css";

const Title = ({subTitle, title }) => {

    return (
      
        <>
            
            <div id="heading">

                <h3>{subTitle}</h3>

                <h1>{title}</h1>
                
            </div>

        </>
        
    )
    
}

export default Title
