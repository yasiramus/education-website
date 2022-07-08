// importations of BrowserRouter as Router,Route  from react-router-dom 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// this is also a  sub parent entry component 

// app.css importation 
import './App.css';

// the header importation  from the component folder
import Header from './components/headings/Header';

// home page importation  from the page folder 
import Home from './pages/home/Home';

// about page importation  from the page folder
import About from "./pages/about/About";

// course home Component
import CourseHome from "./pages/courses/CourseHome";

// team page importation  from the page folder 
import Teams from "./pages/teams/Teams";

// the price page importation  from the page folder
import Price from "./pages/pricing/Price";

// blog page importation  from the page folder
import Blog from "./pages/blog/Blog";

// contact page importation  from the page folder
import Contact from "./pages/contact/Contact";

// footer component importation  from the component folder
import Footer from "./components/footer/Footer";

const App = () => {

  return (

    <div>

      <Router>

        {/* making header component available to all other pages */}
        <Header />
        
        {/*Routes a container for a nested tree of elements that renders the branch that best matches the current location */}
        <Routes>

          {/* the Route Declares an element that should be rendered at a certain URL path. */}

          {/* home component route */}
          <Route index element = { <Home/> }></Route>
         
          {/* about component route */}
          <Route path="/about" element={<About />} ></Route>
          
          {/* courses component */}
          <Route path="/courses" element={<CourseHome/>}></Route>
          
          {/* teams component */}
          <Route path="/team" element = {<Teams/>}></Route>

           {/* price component */}
          <Route path="/pricing" element={< Price/>}></Route>
          
          {/* price component */}
          <Route path="/journal" element={< Blog />}></Route>
          
          {/* contact component */}
          <Route path="/contact" element={< Contact />}></Route>

        </Routes>
        
        {/* making header component available to all other pages */}
        <Footer />
        
      </Router>
      
    </div>

  )
}

export default App;



