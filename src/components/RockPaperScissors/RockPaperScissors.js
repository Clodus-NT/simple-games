import React, { useState, useEffect } from "react";
import './RockPaperScissors.css';

export default function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState('(...Waiting for Player)');
  const [computerChoice, setComputerChoice] = useState('(...Waiting for Computer)');

  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)

  const [roundResult, setRoundResult] = useState(null);
  const [matchResult, setMatchResult] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const choices = ['rock', 'paper', 'scissors'];

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  const handleChoiceClick = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
  }

  const reset = () => {window.location.reload()};

  useEffect(() => {
    // combines the choice string of player and computer to simplify and shorten the if/else checks
    const combinedChoices = userChoice + computerChoice;

    if (userPoints <= 4 && computerPoints <= 4) {
      //User Handling
      if (combinedChoices === 'rockscissors' || combinedChoices === 'paperrock' || combinedChoices === 'scissorspaper') {
        const updatedUserPoints = userPoints + 1;

        setUserPoints(updatedUserPoints);
        setRoundResult('You won this round! Have a point.');

        if (updatedUserPoints === 5) {
          setGameOver(true);
          setMatchResult('You win!');
        }
      }

      //Computer Handling
      if (combinedChoices === 'scissorsrock' || combinedChoices === 'rockpaper' || combinedChoices === 'paperscissors') {
        const updatedComputerPoints = computerPoints + 1;

        setComputerPoints(updatedComputerPoints);
        setRoundResult('Oof... Computer gets a point');

        if (updatedComputerPoints === 5) {
          setGameOver(true);
          setMatchResult('You lost...');
        }
      }
      //Tie Handling
      if (combinedChoices === 'rockrock' || combinedChoices === 'paperpaper' || combinedChoices === 'scissorsscissors') {
        setRoundResult('It\'s a tie. Nobody gets a point.')
      }
    }


  }, [userChoice, computerChoice])

  return (
    <div>
      <h1>Rock-Paper-Scissors</h1>
      <div>
        <div>
          <h1>You: {userPoints}</h1>
          <h1>Computer: {computerPoints}</h1>
        </div>
        <div>
          <div>You chose: {userChoice}</div>
          <div>Computer chose: {computerChoice}</div>
        </div>
        <div>
          <h1>Round Result: {roundResult}</h1>
          <h1>Match Result: {matchResult}</h1>
        </div>
        <div>
          {gameOver &&
            <button onClick={() => reset()}>Retry</button>
          }
        </div>
        <div>
          <h3>Choose Wisely!</h3>
          <div>
            {choices.map((choice, index) => 
              <button key={index} onClick={() => handleChoiceClick(choice)}>{choice}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}