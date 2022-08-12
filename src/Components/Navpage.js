import React from 'react';
import './Navpage.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import {Routes, Route,} from "react-router-dom";


const Navpage = () =>{
  return (
    
       <>
       <div className="Navpage">
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Contact" element={<Contact/>} />
      </Routes>
      </div>
      </>
    
   
  );
}

export default Navpage;