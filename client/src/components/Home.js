import React from 'react';
import {Container} from "react-bootstrap"
import './Home.css'; // Import your custom CSS file

const Home = () => {
  return(
    <div className="home-container">
      <Container fluid className="text-light py-5">
        <h1>Welcome to the RainMan project!</h1>
        <h2> Always wanted to be an expert at Black Jack, You want to look smart?
            <br></br>
            Just try any of the options above:<br></br>
        </h2>
        <h3>
            <ul>
              <li>Simple game let's you play a BlackJack game, help you make the right decision</li>
              <li>User-input game let's you tell us what card have been dealt in your game</li>
              <li>AR... You get it, like Iron-Man super sunnies!!!</li>
            </ul>
        </h3>
      </Container>
    </div>
  )
};
export default Home;