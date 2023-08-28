import React, { useEffect, useState, useRef } from 'react';
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

  const myRef = useRef(null);
  const [suitColor, setSuitColor] = useState(""); // Define suitColor state 
  useEffect(() => {
    suit === "hearts" || suit === "diamonds"
      ? setSuitColor("red")
      : setSuitColor("black");
  }, [suit]); 

  function flipCard() {
    if (myRef.current.style.transform) {
      myRef.current.style.transform = "";
    } else {
      myRef.current.style.transform = "rotateY(180deg)";
    }
  }

  return(
    
        <div className='card' 
          ref={myRef}
          onClick={flipCard}>

          <div
              className="card-inner"
              style={{
                width: '100%',
                height: '100%',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.5s', // Add transition for smoother animation
                transform: 'rotateY(180deg)',
              }}
            >
              <div style={{ backfaceVisibility: "hidden" }}>
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
                    left: "30px",
                    color: suitColor,
                  }}
                />  
                <h1 className='rank bottom'>
                  {rank}
                </h1>
              </div>

              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <img
                  src={CardBack} // Specify the image path
                  alt="Card back"
                  style={{
                    width: "100%", // Adjust dimensions as needed
                    height: "100%",
                  }}
                />
              </div>
            </div>

        </div>
  )
}


export default Card;