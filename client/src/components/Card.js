import React from 'react';
import './Card.css';

const Card = ({ rank, suit, value }) => {
  return(
    <div className="card">
      <div className="card-rank">{rank}</div>
      <div className={`card-suit ${suit}`}>{suit}</div>
      <div className="card-value">{value}</div>
    </div>
  )


}

export default Card;