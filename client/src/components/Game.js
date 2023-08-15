import { Button, Container, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import createShuffledDeck from './Deck';
import './Home.css';

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
          </Col>
          <Col className="stats text-light py-5">
            <h3>Score=</h3>
          </Col>

        </Row>
        <Row className="player half-height-row">
          <Col className="game">
            <Button>Stand</Button>
            <Button>Hit</Button>
          </Col>
          <Col className="stats text-light py-5">
            <h3>Score=</h3>
          </Col>

          
        </Row>
      </Container>
    </div>
  )
};

export default Game;