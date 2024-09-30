import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to the Game Hub</h1>
      <p>Select a game to play:</p>
      <nav>
        <ul>
          <li><Link to="/rock-paper-scissors">Rock, Paper, Scissors</Link></li>
          <li><Link to="/guess-the-number">Guess the Number</Link></li>
          <li><Link to="/snake">Snake </Link></li>
          <li><Link to="/tictactoe">Tic Tac Toe</Link></li> 
        </ul>
      </nav>
    </div>
  );
}

export default Home;
