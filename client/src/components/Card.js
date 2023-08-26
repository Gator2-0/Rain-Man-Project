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
    suit === "Hearts" || suit === "Diamonds"
      ? setSuitColor("red")
      : setSuitColor("black");
  }, [suit]); 

  return(
    <div className="card">
      <h1 className='rank top'>
        {rank}
      </h1>
      {!isFaceUp && ( // Conditionally render the back of the card
        <div
          style={{
            width: "216px",
            height: "312px",
            margin: "10px",
            border: "2px solid red",
            borderRadius: "12px",
            backgroundImage: `url(${CardBack})`,
          }}
        ></div>
      )}
      {isFaceUp && ( // Conditionally render the front of the card
        <SuitIcon
          className="suitIcon"
          suit={suit}
          style={{
            fontSize: "25px",
            position: "absolute",
            margin: "0px",
            top: "75px",
            left: "100px",
            color: suitColor,
          }}
        />
      )}
      <h1 className='rank bottom'>
        {rank}
      </h1>
    </div>
  )
}


export default Card;