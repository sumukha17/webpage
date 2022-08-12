import React from 'react';
import './Contact.css'
import Phone from './Images/Phone.png';
import Email from './Images/Email.png';
import Address from './Images/Address.png';
const Contact = () =>{
    return(
      <>
      <div className="Contact">
        <div className="Contact_info">
          <div className="Mobile">
              <img src={Phone} alt=""></img>
              < h5 className="Contact_title">Phone : </h5>
              8762287122
          </div>
          <div className="E-mail">
              <img src={Email} alt=""></img>
              < h5 className="Contact_title">E-mail : </h5>
              Sumukhabharadwaj666@gmail.com
          </div>
          <div className="Address">
              <img src={Address} alt=""></img>
              < h5 className="Contact_title">Home : </h5>
              Dr no-276,Sagar road,Ripponpet
          </div>
        </div>
        <div className="Contact_form">
           <div className="Form_container">
            <div className="Form_title">Get in touch</div>
          <div className="Form_details">
            <form id="contact_form">
              <div className="Contact_name ">
              <input type="text" className="Form_name" placeholder="Enter your Name" required="true"/>
              <input type="email" className="Form_email" placeholder="Enter your Email" required="true"/>
              <input type="number" className="Form_number" placeholder="Enter your Number" required="true"/>
              </div>
              <div className="Contact_message">
                <textarea className="Form_message" cols="70" rows="10" placeholder="Type your Message"></textarea>
              </div>
              <div className="Form_button">
                <button type="submit" className="Submit_button">Send Message</button>
              </div>
            </form>
        </div>
          </div>
        </div>
        </div>
      
    </>
    );
}

export default Contact;