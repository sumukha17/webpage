import React from 'react';
import './Mainpage.css';
import Navbar from './Navbar.js';
import Navpage from './Navpage.js';

const Mainpage = () =>{
    return(
    <>
    <section>
        <div className="Content">
            <Navbar/>
            <Navpage/>
        </div>
    </section>
    </>
    )
}

export default Mainpage;