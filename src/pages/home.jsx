import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="Home text-center mt-5">
      <h1 className="mb-4">Welcome to the Corn Hub</h1>
      <p className="lead">Select a game to play:</p>
      <Row className="justify-content-center">
        <Col md={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Rock, Paper, Scissors</Card.Title>
              <Link to="/rock-paper-scissors">
                <Button variant="primary">Play</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Guess the Number</Card.Title>
              <Link to="/guess-the-number">
                <Button variant="success">Play</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Snake</Card.Title>
              <Link to="/snake">
                <Button variant="warning">Play</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Tic Tac Toe</Card.Title>
              <Link to="/tictactoe">
                <Button variant="danger">Play</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
