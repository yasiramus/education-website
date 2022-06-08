// importations of BrowserRouter as Router,Route  from react-router-dom 
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

// this is also a parent component 
import './App.css';

// the header component 
import Header from './components/headings/Header';
import About from "./pages/about/About";

// home component 
import Home from './pages/home/Home';

const App = () => {

  return (

    <div>

      <Router>

          {/* header component */}
        <Header />
        
        <Routes>

            {/* home component route */}
          <Route index element = { <Home/> }></Route>
         
          {/* about component route */}
          <Route path = "/about" element = { <About/> } ></Route>

        </Routes>

      </Router>
      
    </div>

  )
}

export default App;



