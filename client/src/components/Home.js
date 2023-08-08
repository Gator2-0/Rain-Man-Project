import React from 'react';
import {Container} from "react-bootstrap"
import './Home.css'; // Import your custom CSS file

const Home = () => {
  return(
    <div className="home-container">
      <Container fluid className="text-light py-5">
        <h1>This is the Home Page</h1>
      </Container>
    </div>
  )
};
export default Home;