import React from 'react';
import './About.css';
import DeerFace from './Images/DeerFace.jpg';
import DeerJump from './Images/DeerJump.jpg';
import LeopardFace from './Images/LeopardFace.jpg';
import Falls from './Images/Falls.jpg';
import LionFace from './Images/LionFace.jpg';
import Monkey from './Images/Monkey.jpg';
import TigerFace from './Images/TigerFace.jpg';
import DeerPeek from './Images/DeerPeek.jpg';


const About = () =>{
    return(
      <>
      <h2 className="About-heading">Here are some images captured by me!</h2>
       <div className="About">
          <Card
          img={DeerFace} 
          title="Deer Facing"
          desc="Hey! this picture was taken in Thyavarekoppa zoo,Shivamogga., Where a deer is looking at the camera."
          />
          <Card
          img={DeerJump} 
          title="Deer Jumping"
          desc="Hey! this picture was taken in Angod park,Davanagere., Where a deer is jumping towords leaves in a tree."
          />
          <Card
          img={LeopardFace} 
          title="Leopard Facing"
          desc="Hey! this picture was taken in Pilikula Zoo,Mangalore., Where a Leopard is looking aside."
          />
          <Card
          img={Falls} 
          title="Milky Falls"
          desc="Hey! this picture was taken in Kote abbe falls,Coorg. Where water is flowing like a milk."
          />
          <Card
          img={LionFace} 
          title="Lion Facing"
          desc="Hey! this picture was taken in Thyavarekoppa zoo,Shivamogga., Where a Lion is looking at the camera."
          />
          <Card
          img={Monkey} 
          title="Monkey Facing"
          desc="Hey! this picture was taken in Thyavarekoppa zoo,Shivamogga., Where a Monkey was posing like a model."
          />
          <Card
          img={TigerFace} 
          title="Tiger Facing"
          desc="Hey! this picture was taken in Pilikula Zoo, Mangalore., Where a tiger is looking at the camera."
          />
          <Card
          img={DeerPeek} 
          title="Deer Peeking"
          desc="Hey! this picture was taken in Anagod park,Davanagere., Where a deer is Peeking towords camera."
          />
      </div>
    </>
    );
}

const Card = (props) =>{
  return(
    <div className="card">
      <div className="card-body">
        <img className="card-img" src={props.img} alt=""/>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.desc}</p>
      </div>
      <button className="card-button" onClick="color:red">Like</button>
    </div>
  )
}

export default About;