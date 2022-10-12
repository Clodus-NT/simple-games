import React, { useState, useEffect } from "react";
import './RockPaperScissors.css';

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState('...');
  const [computerChoice, setComputerChoice] = useState('...');

  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)

  const [roundResult, setRoundResult] = useState('(...)');
  const [matchResult, setMatchResult] = useState('(...)');
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
    <div className="rpcContainer">
      <h1 className="rpcTitle">Rock-Paper-Scissors</h1>
      <div className="rpcOutputContainer">
        <div className="rpcPlayerBoard">
          <div>
            <h2>You: <span className="rpcChoiceOutput">( {userChoice} )</span></h2>
            <h3>VS</h3>
            <h2>Computer: <span className="rpcChoiceOutput">( {computerChoice} )</span></h2>
          </div>
          <div>
            <h3>Score: You - {userPoints} | PC - {computerPoints}
            </h3>
          </div>
        </div>
        <div>
          <h1>Round Result: <span className="results">{roundResult}</span></h1>
          <h1>Match Result: <span className="results">{matchResult}</span></h1>
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

export default RockPaperScissors;