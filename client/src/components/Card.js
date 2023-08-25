import React from 'react';
import './Card.css';

// const Card = ({ rank, suit, value }) => {
//   return(
//     <div className="card">
//       <div className="card-rank">{rank}</div>
//       <div className={`card-suit ${suit}`}>{suit}</div>
//       <div className="card-value">{value}</div>
//     </div>
//   )


// }

const Card = ({ rank, suit, value }) => {
  return(
    <div className="card">
      <h1 className='rank top'>
        {rank}
      </h1>
      <h1 className='rank bottom'>
        {rank}
      </h1>
    </div>
  )


}


export default Card;