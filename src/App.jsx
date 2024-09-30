import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import RockPaperScissors from './pages/RockPaperScissors.jsx';
import GuessNumber from './pages/GuessNumber.jsx';
import Snake from './pages/Snake.jsx';
import TicTacToe from './pages/Tictactoe.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/guess-the-number" element={<GuessNumber />} />
        <Route path="/snake" element={<Snake />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;
