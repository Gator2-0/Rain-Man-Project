import React from 'react';
import {Container} from "react-bootstrap"
import './Home.css'; // Import your custom CSS file

const Home = () => {
  return(
    <div className="home-container">
      <Container fluid className="text-light py-5">
        <h1>This is the Home Page</h1>
        <h2> Always wanted to be an expert at Black Jack, You want to look smart?
            <br></br>
            Just try any of the options above:<br></br>
              -Simple game let's you play a BlackJack game, help you make the right decision<br></br>
              -User-input game let's you tell us what card have been dealt in your game<br></br>
              -AR... You get it, like Iron-Man supe rsunnies!!!
        </h2>
      </Container>
    </div>
  )
};
export default Home;