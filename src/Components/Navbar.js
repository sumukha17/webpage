import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";

  
const Navbar = () => {
  return (
    <>
    <header>
      <div className="NavbarL">
      
       <NavLink exact to = "/" activeClassName='active'> Home </NavLink>
       <NavLink to = "/About"> About</NavLink>
       <NavLink to = "/Contact"> Contact</NavLink>
     </div>   
     </header>        
    </>
  );
};
  
export default Navbar;