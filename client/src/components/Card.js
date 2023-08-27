import React, { useEffect, useState } from 'react';
import {
  BsFillSuitHeartFill,
  BsFillSuitDiamondFill,
  BsFillSuitSpadeFill,
  BsFillSuitClubFill,
} from 'react-icons/bs';
import { GiCardJoker } from 'react-icons/gi';
import CardBack from '../images/card-back.png';
import './Card.css';

 

function SuitIcon({ suit, style }) {
  if (suit === "hearts") {
    return <BsFillSuitHeartFill style={style} />;
  } else if (suit === "diamonds") {
    return <BsFillSuitDiamondFill style={style} />;
  } else if (suit === "spades") {
    return <BsFillSuitSpadeFill style={style} />;
  } else if (suit === "clubs") {
    return <BsFillSuitClubFill style={style} />;
  } else {
    // If no suit is given then we can just put out little joker faces
    return <GiCardJoker style={style} />;
  }
}

const Card = ({ rank, suit, value, isFaceUp }) => {

  const [suitColor, setSuitColor] = useState(""); // Define suitColor state 
  useEffect(() => {
    suit === "hearts" || suit === "diamonds"
      ? setSuitColor("red")
      : setSuitColor("black");
  }, [suit]); 

  if(!isFaceUp){
    return (
      <div className='card'>
        <img
            src={CardBack} // Specify the image path
            alt="Card back image"
            style={{
              width: "100%", // Adjust dimensions as needed
              height: "100%",
            }}
          />
      </div>
    )
  }
  return(
   
        <div className="card">
          <h1 className='rank top'>
            {rank}
          </h1>
          <SuitIcon
            className="suitIcon"
            suit={suit}
            style={{
              fontSize: "25px",
              position: "absolute",
              margin: "0px",
              top: "60px",
              left: "38px",
              color: suitColor,
            }}
          />  
          <h1 className='rank bottom'>
            {rank}
          </h1>
        </div>
  )
}


export default Card;