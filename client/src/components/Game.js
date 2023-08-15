import { Button, Container, Row, Col } from "react-bootstrap";
import './Home.css';

const Game = () => {
  return(
    <div className="home-container">
      <Container>
        <Row className="dealer half-height-row">
          <Col className="game">
          </Col>
          <Col className="stats">
          </Col>

        </Row>
        <Row className="player half-height-row">
          <Col className="game">
            <Button>Stand</Button>
            <Button>Hit</Button>
          </Col>
          <Col className="stats">

          </Col>

          
        </Row>
      </Container>
    </div>
  )
};

export default Game;