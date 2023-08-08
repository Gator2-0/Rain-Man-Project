import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import './Home.css'; 

const VerticalNavbar = () => {
  return (
    <Nav className="flex-column">
      <Nav.Link href="#cards">Card Values</Nav.Link>
      <Nav.Link href="#objective">Objective</Nav.Link>
      <Nav.Link href="#gameplay">Gameplay</Nav.Link>
      <Nav.Link href="#player">Player's Turn</Nav.Link>
      <Nav.Link href="#dealer">Dealer's Turn</Nav.Link>
      <Nav.Link href="#winning">Winning and Payouts</Nav.Link>
    </Nav>
  );
};

const Rules = () => {
  return(

    <div className='rule-container'>
      <VerticalNavbar />
      <Container fluid className="text-light py-5">
        <ol>
          <li id='cards'>Card Values:</li>
            <ul>
              <li>Number cards (2 through 10) are worth their face value.</li>
              <li>Face cards (Jack, Queen, King) are each worth 10 points.</li>
              <li>An Ace can be worth either 1 point or 11 points, depending on which value benefits the hand more.</li>
            </ul>
          <li id='objective'>Objective:</li>
            <p>The goal is to have a hand value as close to 21 as possible without exceeding it. If a player's hand exceeds 21, it's called a "bust," and they lose the round.</p>  
          <li id='gameplay'>Gameplay:</li>
            <ul>
              <li>Players place their bets before the cards are dealt.</li>
              <li>Each player, including the dealer, is dealt two cards. Players' cards are usually dealt face up, while one of the dealer's cards is face down (the "hole" card).</li>
              <li>Players can see their own cards but not the dealer's hole card.</li>
            </ul>
          <li id='player'>Player's Turn:</li>
            <ul>
              <li>Players can choose to "hit" (take another card) to increase their hand value or "stand" (keep their current hand).</li>
              <li>Players can continue to hit until they decide to stand or until their hand exceeds 21 (resulting in a bust).</li>
            </ul>
          <li id='dealer'>Dealer's Turn:</li>
            <ul>
              <li>After all players have completed their turns, the dealer reveals their hole card.</li>
              <li>The dealer must hit until their hand value is at least 17 points.</li>
              <li>If the dealer busts, players who didn't bust win the round.</li>
            </ul>
          <li id='winning'>Winning and Payouts:</li>
            <ul>
              <li>If a player's hand value is closer to 21 than the dealer's hand, the player wins and receives a payout of 1:1 (even money) on their bet.</li>
              <li>If a player's hand value equals 21 with their first two cards (an Ace and a 10-point card, i.e., a 10, Jack, Queen, or King), it's called a "blackjack." The player is typically paid 3:2 on their bet.</li>
              <li>If the player and the dealer have the same hand value, it's a "push," and the player's bet is returned.</li>
              <li>If the dealer's hand value is closer to 21 or all players bust, the dealer wins, and players lose their bets.</li>
            </ul>
        </ol>
      </Container>
    </div>
  )
};

export default Rules