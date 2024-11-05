import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
 
  Works,
  
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import Contact2 from "./components/sections/Contact2";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (

    <BrowserRouter>
      <div className="bg-primary relative z-0 ">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
     
          <Navbar />
         
          <Hero />
        </div>

        <About />
      


        <div className="relative z-0 ">
          <Contact />
         
        </div>
        {/* < Radio /> */}
      
        <Experience />


       

        <Works />
        
     
        <div className="relative z-0">
          <Contact2 />
       
        </div>
       
      </div>
    </BrowserRouter>
  );
};

export default App;
