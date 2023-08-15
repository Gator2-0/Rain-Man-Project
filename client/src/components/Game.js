import { Button, Container, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import createShuffledDeck from './Deck';
import './Home.css';

const calculateHandValue = (hand) => {
  let value = 0;

  for (const card of hand) {
    value += card.value;
    
  }
   return value;
}


const Game = () => {

  const [deck, setDeck] = useState(createShuffledDeck());
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);

  const dealInitialCards = () => {
    setDeck((prevDeck) => {
      const playerInitialHand = [prevDeck.pop(), prevDeck.pop()];
      const dealerInitialHand = [prevDeck.pop(), prevDeck.pop()];
  
      setPlayerHand(playerInitialHand);
      setDealerHand(dealerInitialHand);
      return prevDeck; // Return the updated deck
    });
  };

  // ... Game logic, hit, stand, etc.
  const hit = () => {
    setDeck((prevDeck) => {
      const newPlayerHand = [...playerHand, prevDeck.pop()];
      setPlayerHand(newPlayerHand);
  
      if (calculateHandValue(newPlayerHand) > 21) {
        // Handle "you lose!" logic here
        // Show modal or update game state accordingly
        return prevDeck; // Return the updated deck
      }
  
      while (calculateHandValue(dealerHand) < calculateHandValue(newPlayerHand)) {
        const newDealerHand = [...dealerHand, prevDeck.pop()];
        setDealerHand(newDealerHand);
  
        if (calculateHandValue(newDealerHand) > 21) {
          // Handle "you win!" logic here
          // Show modal or update game state accordingly
          return prevDeck; // Return the updated deck
        }
      }
  
      return prevDeck; // Return the updated deck
    });
  };

  const stand = () => {
    setDeck((prevDeck) => {
      let newDealerHand = [...dealerHand]; // Create a copy of dealerHand to update
  
      while (calculateHandValue(newDealerHand) < 17) {
        newDealerHand = [...newDealerHand, prevDeck.pop()];
      }
  
      setDealerHand(newDealerHand);
  
      if (calculateHandValue(newDealerHand) > 21) {
        // Handle "you win!" logic here
        // Show modal or update game state accordingly
      }
  
      return prevDeck; // Return the updated deck
    });
  };
  
  


  return(
    <div className="home-container">
      <Container>
        <Row className="dealer half-height-row text-light py-5">
          <Col className="game">
            {dealerHand.map((card, index) => (
                <div key={index}>
                  {card.rank} of {card.suit} - Value: {card.value}
                </div>
              ))}
          </Col>
          <Col className="stats">
          <Button onClick={dealInitialCards}>Deal Initial Cards</Button>
            <h3>Score={calculateHandValue(dealerHand)}</h3>
          </Col>

        </Row>
        <Row className="player half-height-row text-light py-5">
          <Col className="game">
            {playerHand.map((card, index) => (
              <div key={index}>
                {card.rank} of {card.suit} - Value: {card.value}
              </div>
            ))}
            <Button onClick={stand}>Stand</Button>
            <Button onClick={hit}>Hit</Button>
          </Col>
          <Col className="stats">
            <h3>Score={calculateHandValue(playerHand)}</h3>
          </Col>

          
        </Row>
      </Container>
    </div>
  )
};

export default Game;