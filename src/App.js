// importations of BrowserRouter as Router, Switch, Route Link from react-router-dom 
import { BrowserRouter as Router } from "react-router-dom";

// this is also a parent component 
import './App.css';

// import Home from "./pages/home";

// the header component 
import Header from './components/headings/Header';

const App = () => {

  return (

    <div>

      <Router>

      <Header />

          {/* <Route path="/about">

            <About />

          </Route> */}
         
      </Router>
      
    </div>

  )
}

export default App;



