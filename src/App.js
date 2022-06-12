// importations of BrowserRouter as Router,Route  from react-router-dom 
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

// this is also a parent component 
import './App.css';

// the header component 
import Header from './components/headings/Header';

// home component 
import Home from './pages/home/Home';

// about Component
import About from "./pages/about/About";

// course home Component
import CourseHome from "./pages/courses/CourseHome";

// team component 
import Teams from "./pages/teams/Teams";

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
          <Route path="/about" element={<About />} ></Route>
          
          {/* courses component */}
          <Route path="/courses" element={<CourseHome/>}></Route>
          
          {/* teams component */}
          <Route path="/team" element = {<Teams/>}></Route>

        </Routes>

      </Router>
      
    </div>

  )
}

export default App;



