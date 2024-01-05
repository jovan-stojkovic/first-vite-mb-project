import React, { useState, useEffect } from "react";

const App = () => {
  const [myScore, setMyScore] = useState(0)
  const [compScore, setCompScore] = useState(0)
  const [draws, setDraws] = useState(0)
  const [computerMove, setComputerMove] = useState("You will see...");
  const [yourMove, setYourMove] = useState("Just play");
  const [desc, setDesc] = useState("I will explain again");

  const showComputerMove = () => {
    console.log("--------------------------------");
  };

  const computerMoveForRock = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    let moveResult;
    let drawNumber = 0;

    if (randomNumber <= 2) {
      setComputerMove("Rock");
      setDesc("It's a draw, try again!");
      moveResult = "Draw";
    } else if (randomNumber <= 4) {
      setComputerMove("Paper");
      setDesc("Paper covers rock, you lose...");
      moveResult = "Loss";
    } else if (randomNumber <= 6) {
      setComputerMove("Scissors");
      setDesc("...and as it always has, rock crushes scissors, you win!");
      moveResult = "Win";
    } else if (randomNumber <= 8) {
      setComputerMove("Lizard");
      setDesc("Rock crushes lizard, you win!");
      moveResult = "Win";
    } else {
      setComputerMove("Spock");
      setDesc("Spock vaperizes rock, you lose...");
      moveResult = "Loss";
    }

    console.log(moveResult);
  };

  const computerMoveForPaper = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    let moveResult;

    if (randomNumber <= 2) {
      setComputerMove("Rock");
      setDesc("Paper covers rock, you win!");
      moveResult = "Win";
    } else if (randomNumber <= 4) {
      setComputerMove("Paper");
      setDesc("It's a draw, try again");
      moveResult = "Draw";
    } else if (randomNumber <= 6) {
      setComputerMove("Scissors");
      setDesc("Scissors cuts paper, you lose...");
      moveResult = "Loss";
    } else if (randomNumber <= 8) {
      setComputerMove("Lizard");
      setDesc("Lizard eats paper, you lose...");
      moveResult = "Loss";
    } else {
      setComputerMove("Spock");
      setDesc("Paper disproves Spock, you win!");
      moveResult = "Win";
    }

    console.log(moveResult);
  };

  const computerMoveForScissors = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    let moveResult;

    if (randomNumber <= 2) {
      setComputerMove("Rock");
      setDesc("...and as it always has, rock crushes scissors, you lose...");
      moveResult = "Loss";
    } else if (randomNumber <= 4) {
      setComputerMove("Paper");
      setDesc("Scissors cuts paper, you win!");
      moveResult = "Win";
    } else if (randomNumber <= 6) {
      setComputerMove("Scissors");
      setDesc("It's a draw, try again");
      moveResult = "Draw";
    } else if (randomNumber <= 8) {
      setComputerMove("Lizard");
      setDesc("Scissors decapitates lizard, you win!");
      moveResult = "Win";
    } else {
      setComputerMove("Spock");
      setDesc("Spock smashes scissors, you lose...");
      moveResult = "Loss";
    }

    console.log(moveResult);
  };

  const computerMoveForLizard = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    let moveResult;

    if (randomNumber <= 2) {
      setComputerMove("Rock");
      setDesc("Rock crushes lizard, you lose...");
      moveResult = "Loss";
    } else if (randomNumber <= 4) {
      setComputerMove("Paper");
      setDesc("Lizard eats paper, you win!");
      moveResult = "Win";
    } else if (randomNumber <= 6) {
      setComputerMove("Scissors");
      setDesc("Scissors decapitates lizard, you lose...");
      moveResult = "Loss";
    } else if (randomNumber <= 8) {
      setComputerMove("Lizard");
      setDesc("It's a draw, try again");
      moveResult = "Draw";
    } else {
      setComputerMove("Spock");
      setDesc("Lizard poisens Spock, you win!");
      moveResult = "Win";
    }

    console.log(moveResult);
  };

  const computerMoveForSpock = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    let moveResult;

    if (randomNumber <= 2) {
      setComputerMove("Rock");
      setDesc("Spock vaporizes rock, you win!");
      moveResult = "Win";
    } else if (randomNumber <= 4) {
      setComputerMove("Paper");
      setDesc("Paper disproves Spock, you lose...");
      moveResult = "Loss";
    } else if (randomNumber <= 6) {
      setComputerMove("Scissors");
      setDesc("Spock smashes scissors, you win!");
      moveResult = "Win";
    } else if (randomNumber <= 8) {
      setComputerMove("Lizard");
      setDesc("Lizard poisons Spock, you lose...");
      moveResult = "Lose";
    } else {
      setComputerMove("Spock");
      setDesc("It's a draw, try again");
      moveResult = "Draw";
    }

    console.log(moveResult);
  };

  // if (moveResult === 'Win') {
  //   setMyScore(+1)
  // } else if (moveResult === 'Draw') {
  //   setDraws(+1)
  // } else if (moveResult === 'Loss') {
  //   setCompScore (+1)
  // }

  return (
    <>
      <h1>The Sheldon Cooper's Game</h1>
      <h2>Choose your move carefully</h2>
      <button
        onClick={() => {
          showComputerMove();
          computerMoveForRock();
          setYourMove("Rock");
        }}
      >
        Rock
      </button>

      <button
        onClick={() => {
          showComputerMove();
          computerMoveForPaper();
          setYourMove("Paper");
        }}
      >
        Paper
      </button>

      <button
        onClick={() => {
          showComputerMove();
          computerMoveForScissors();
          setYourMove("Scissors");
        }}
      >
        Scissors
      </button>

      <button
        onClick={() => {
          showComputerMove();
          computerMoveForLizard();
          setYourMove("Lizard");
        }}
      >
        Lizard
      </button>
      <button
        onClick={() => {
          showComputerMove();
          computerMoveForSpock();
          setYourMove("Spock");
        }}
      >
        Spock
      </button>

      <h2>Your move was: {yourMove}</h2>
      <h2>Computer's move: {computerMove}</h2>
      <h3>{desc}</h3>
      <p>{myScore} - {draws} - {compScore}</p>
      <button>Reset</button>
    </>
  );
};

export default App;
