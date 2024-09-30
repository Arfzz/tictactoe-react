import React, { useState } from 'react';

function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const choices = ['rock', 'paper', 'scissors'];

  const playGame = (playerSelection) => {
    setPlayerChoice(playerSelection);
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(randomChoice);

    let gameResult = '';
    if (playerSelection === randomChoice) {
      gameResult = `It's a draw! Both chose ${playerSelection}`;
    } else if (
      (playerSelection === 'rock' && randomChoice === 'scissors') ||
      (playerSelection === 'scissors' && randomChoice === 'paper') ||
      (playerSelection === 'paper' && randomChoice === 'rock')
    ) {
      gameResult = `You win! ${playerSelection} beats ${randomChoice}`;
    } else {
      gameResult = `You lose! ${randomChoice} beats ${playerSelection}`;
    }

    setResult(gameResult);
  };

  return (
    <div className="RockPaperScissors">
      <h1>Rock, Paper, Scissors</h1>
      <p>Player choice: {playerChoice}</p>
      <p>Computer choice: {computerChoice}</p>
      <p>{result}</p>

      <div>
        <button onClick={() => playGame('rock')}>Rock</button>
        <button onClick={() => playGame('paper')}>Paper</button>
        <button onClick={() => playGame('scissors')}>Scissors</button>
      </div>
    </div>
  );
}

export default RockPaperScissors;
