import { Button, Container, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import createShuffledDeck from './Deck';
import './Home.css';

const calculateHandValue = (hand) => {
  let value = 0;
  let numAces = 0;

  for (const card of hand) {
    value += card.value;
    if (card.rank === 'A') {
      numAces++;
    }
  }
}


const Game = () => {

  const [deck, setDeck] = useState(createShuffledDeck());
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);

  const dealInitialCards = () => {
    const playerInitialHand = [deck.pop(), deck.pop()];
    const dealerInitialHand = [deck.pop(), deck.pop()];

    setPlayerHand(playerInitialHand);
    setDealerHand(dealerInitialHand);
    setDeck(deck); // Update the remaining deck
  };

  // ... Game logic, hit, stand, etc.


  return(
    <div className="home-container">
      <Container>
        <Row className="dealer half-height-row">
          <Col className="game">
            {dealerHand.map((card, index) => (
                <div key={index}>
                  {card.rank} of {card.suit} - Value: {card.value}
                </div>
              ))}
          </Col>
          <Col className="stats text-light py-5">
          <button onClick={dealInitialCards}>Deal Initial Cards</button>
            <h3>Score={calculateHandValue(dealerHand)}</h3>
          </Col>

        </Row>
        <Row className="player half-height-row">
          <Col className="game">
            {playerHand.map((card, index) => (
              <div key={index}>
                {card.rank} of {card.suit} - Value: {card.value}
              </div>
            ))}
            <Button>Stand</Button>
            <Button>Hit</Button>
          </Col>
          <Col className="stats text-light py-5">
            <h3>Score={calculateHandValue(playerHand)}</h3>
          </Col>

          
        </Row>
      </Container>
    </div>
  )
};

export default Game;