import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import React, { useState } from 'react';
import createShuffledDeck from './Deck';
import Card from "./Card";
import './Home.css';


const calculateHandValue = (hand) => {
  let value = 0;

  for (const card of hand) {
    if(card.isFaceUp){
      value += card.value;
    }
    
  }
   return value;
}

//Main
const Game = () => {

  const [isFaceUp, setIsFaceUp] = useState(true);
  const [playerCardFaceUp, setPlayerCardFaceUp] = useState([]);
  const [dealerCardFaceUp, setDealerCardFaceUp] = useState([]);
  const [deck, setDeck] = useState(createShuffledDeck());
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [gameResult, setGameResult] = useState('');

  // Function to toggle the face-up state of a player's card
  const toggleCardFaceUp = (index, isPlayer) => {
    if (isPlayer) {
      setPlayerCardFaceUp((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = !newStates[index];
        setPlayerHand((prevPlayerHand) => {
          const newPlayerHand = [...prevPlayerHand];
          newPlayerHand[index].isFaceUp = newStates[index];
          return newPlayerHand;
        });
        return newStates;
      });
    } else {
      setDealerCardFaceUp((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = !newStates[index];
        setDealerHand((prevDealerHand) =>{
          const newDealerHand = [...prevDealerHand];
          newDealerHand[index].isFaceUp = newStates[index];
          return newDealerHand;
        })
        return newStates;
      });
    }
  };

  const handleShowModal = (result) => {
    setGameResult(result);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setGameResult('');
    setDeck(createShuffledDeck()); // Reset the deck
    setPlayerHand([]); // Reset the player's hand
    setDealerHand([]); // Reset the dealer's hand
  };

  //to set the initial hands for both player and dealer
  //TODO - need to add a timer to slow down card reveal
  const dealInitialCards = () => {
    setDeck((prevDeck) => {
      const newDeck = [...prevDeck]; // Create a copy of the deck
      const playerInitialHand = [
        { ...newDeck.pop()},
        { ...newDeck.pop()},
      ];
      
      const dealerInitialHand = [
        { ...newDeck.pop()},
        { ...newDeck.pop()}, // Dealer's second card is face down
      ];
  
      setPlayerHand(playerInitialHand);
      setDealerHand(dealerInitialHand);
      
      return newDeck; // Return the updated deck
    });
  };
  

  // ... Game logic, hit, stand, etc.
  const hit = () => {
    setDeck((prevDeck) => {
      const newPlayerHand = [...playerHand, prevDeck.pop()];
      setPlayerHand(newPlayerHand);
  
      if (calculateHandValue(newPlayerHand) > 21) {
        // Handle "you lose!" logic here
        handleShowModal('lost');
        // Show modal or update game state accordingly
        return prevDeck; // Return the updated deck
      }
  
      while (calculateHandValue(dealerHand) < calculateHandValue(newPlayerHand) ||calculateHandValue(dealerHand) > 17) {
        const newDealerHand = [...dealerHand, prevDeck.pop()];
        setDealerHand(newDealerHand);
  
        if (calculateHandValue(newDealerHand) > 21 || calculateHandValue(dealerHand)  ) {
          // Handle "you win!" logic here
          handleShowModal('win');
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
      //TODO - flip last card up beofre calculating 
      while (calculateHandValue(newDealerHand) < 17) {
        newDealerHand = [...newDealerHand, prevDeck.pop()];
      }
  
      setDealerHand(newDealerHand);
  
      if (calculateHandValue(newDealerHand) > 21) {
        // Handle "you win!" logic here
        handleShowModal('win');
        // Show modal or update game state accordingly
      }else{
        handleShowModal('lost')
      }
  
      return prevDeck; // Return the updated deck
    });
  };

  
  


  return(
    <div className="home-container">
      <Container>
        <Row className="dealer half-height-row text-light py-5">
          <Col className="game">
            Dealer
            <Row>
              {dealerHand.map((card, index) => (
               <Card
                key={index}
                isFaceUp={dealerCardFaceUp[index]}
                setIsFaceUp={() => toggleCardFaceUp(index, false)}
                rank={card.rank}
                suit={card.suit}
                value={card.value}
             />
              ))}
            </Row>
            
          </Col>
          <Col className="stats">
          <Button onClick={dealInitialCards}>Deal Initial Cards</Button>
            <h3>Score={calculateHandValue(dealerHand)}</h3>
          </Col>

        </Row>
        <Row className="player half-height-row text-light py-5">
          <Col className="game">
            Player
            <Row>
              {playerHand.map((card, index) => (
                <Card
                  key={index}
                  isFaceUp={playerCardFaceUp[index]}
                  setIsFaceUp={() => toggleCardFaceUp(index, true)}
                  rank={card.rank}
                  suit={card.suit}
                  value={card.value}
              />
              ))}
            </Row>
            <Row>
              <Button onClick={stand}>Stand</Button>
              <Button onClick={hit}>Hit</Button>
            </Row>
            

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Game Result</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {gameResult === 'win' ? 'Congratulations! You won the game.' : 'Sorry, you lost the game.'}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
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