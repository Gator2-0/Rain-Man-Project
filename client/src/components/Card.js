import { useState, useEffect, useRef } from "react";
import {
  BsFillSuitHeartFill,
  BsFillSuitClubFill,
  BsFillSuitSpadeFill,
  BsFillSuitDiamondFill,
} from "react-icons/bs";
import { GiCardJoker } from "react-icons/gi";
import CardBack from "../images/card-back.png";

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

function PlayingCard({ suit, rank , value }) {
  const myRef = useRef(null);
  const iconSize = "40px";
  const [suitColor, setSuitColor] = useState("red");

  function flipCard() {
    if (myRef.current.style.transform) {
      myRef.current.style.transform = "";
    } else {
      myRef.current.style.transform = "rotateY(180deg)";
    }
  }

  useEffect(() => {
    suit === "hearts" || suit === "diamonds"
      ? setSuitColor("red")
      : setSuitColor("black");
  }, [suit]);

  return (
    <div
      ref={myRef}
      onClick={flipCard}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.5s ease",
        transform: "rotateY(180deg)",
        width: "100px",
        height: "150px",
        margin: "10px",
        padding:"0",
        border: "2px solid transparent",
        position: "relative",
        backgroundColor: "#F2F2F2",
        borderRadius: "10px",
        boxShadow:
          "3px 3px 3px rgba(0,0,0,0.2), 8px 8px 10px rgba(0,0,0,0.2), 0px 0px 20px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ backfaceVisibility: "hidden" }}>
        <h1
          style={{
            fontSize: "20px",
            color: suitColor,
            position: "absolute",
            top: "0px",
            left: "5px",
            margin: "0px",
          }}
        >
          {rank}
        </h1>
        <SuitIcon
          suit={suit}
          style={{
            fontSize: iconSize,
            position: "absolute",
            margin: "0px",
            top: "50px",
            left: "30px",
            color: suitColor,
          }}
        />
        <h1
          style={{
            fontSize: "20px",
            color: suitColor,
            position: "absolute",
            right: "5px",
            bottom: "0px",
            margin: "0px",
            transform: "rotate(180deg)",
          }}
        >
          {rank}
        </h1>  
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          padding:"0",
          border: "2px solid transparent",
          borderRadius: "10px",
          backgroundImage: "url(" + CardBack + ")",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat', // Prevent background image repetition
          backgroundPosition: 'center',
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      ></div>
    </div>
  );
}

export default PlayingCard;