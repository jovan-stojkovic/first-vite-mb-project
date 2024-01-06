import { useEffect, useState } from "react";
import "./style.css";
const moves = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

const App = () => {
  const [computerMove, setComputerMove] = useState("");
  const [outcome, setOutcome] = useState("Good luck");
  const [desc, setDesc] = useState("Play and see...");
  const [wins, setWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [losses, setLosses] = useState(0);

  const playFunction = (move) => {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    let randomMove;

    if (randomNumber <= 2) {
      randomMove = "Rock";
    } else if (randomNumber <= 4) {
      randomMove = "Paper";
    } else if (randomNumber <= 6) {
      randomMove = "Scissors";
    } else if (randomNumber <= 8) {
      randomMove = "Lizard";
    } else if (randomNumber > 8) {
      randomMove = "Spock";
    }

    if (move === randomMove) {
      setOutcome("Draw");
      setDesc("It's a draw! Play again.");
      setDraws(draws + 1);
    } else if (move === "Rock" && randomMove === "Paper") {
      setOutcome("Loss");
      setDesc("Paper covers Rock.");
      setLosses(losses + 1);
    } else if (move === "Rock" && randomMove === "Scissors") {
      setOutcome("Win");
      setWins(wins + 1);

      setDesc("(...and as it always has) Rock crushes Scissors.");
    } else if (move === "Rock" && randomMove === "Lizard") {
      setOutcome("Win");
      setWins(wins + 1);

      setDesc("Rock crushes Lizard.");
    } else if (move === "Rock" && randomMove === "Spock") {
      setOutcome("Loss");
      setLosses(losses + 1);
      setDesc("Spock smashes scissors.");
    } else if (move === "Paper" && randomMove === "Rock") {
      setOutcome("Win");
      setWins(wins + 1);

      setDesc("Paper covers Rock.");
    } else if (move === "Paper" && randomMove === "Scissors") {
      setOutcome("Loss");
      setLosses(losses + 1);

      setDesc("Scissors cuts Paper.");
    } else if (move === "Paper" && randomMove === "Lizard") {
      setOutcome("Loss");
      setDesc("Lizard eats Paper.");
      setLosses(losses + 1);
    } else if (move === "Paper" && randomMove === "Spock") {
      setOutcome("Win");
      setWins(wins + 1);

      setDesc("Paper disproves Spock.");
    } else if (move === "Scissors" && randomMove === "Rock") {
      setOutcome("Loss");
      setLosses(losses + 1);

      setDesc("(...and as it always has) Rock crushes Scissors.");
    } else if (move === "Scissors" && randomMove === "Paper") {
      setOutcome("Win");
      setWins(wins + 1);

      setDesc("Scissors cuts Paper.");
    } else if (move === "Scissors" && randomMove === "Lizard") {
      setOutcome("Win");
      setWins(wins + 1);

      setDesc("Scissors decapitates Lizard.");
    } else if (move === "Scissors" && randomMove === "Spock") {
      setOutcome("Loss");
      setLosses(losses + 1);

      setDesc("Spock smashes scissors.");
    } else if (move === "Lizard" && randomMove === "Rock") {
      setOutcome("Loss");
      setLosses(losses + 1);

      setDesc("Rock crushes Lizard");
    } else if (move === "Lizard" && randomMove === "Paper") {
      setOutcome("Win");
      setWins(wins + 1);

      setDesc("Lizard eats Paper.");
    } else if (move === "Lizard" && randomMove === "Scissors") {
      setOutcome("Loss");
      setLosses(losses + 1);

      setDesc("Scissors decapitates Lizard.");
    } else if (move === "Lizard" && randomMove === "Spock") {
      setOutcome("Win");
      setWins(wins + 1);

      setDesc("Lizard poisons Spock.");
    } else if (move === "Spock" && randomMove === "Rock") {
      setOutcome("Win");
      setWins(wins + 1);

      setDesc("Spock vaporizes Rock");
    } else if (move === "Spock" && randomMove === "Paper") {
      setOutcome("Loss");
      setLosses(losses + 1);

      setDesc("Paper disproves Spock.");
    } else if (move === "Spock" && randomMove === "Scissors") {
      setOutcome("Win");
      setWins(wins + 1);

      setDesc("Spock smashes Scissors.");
    } else if (move === "Spock" && randomMove === "Lizard") {
      setOutcome("Loss");
      setLosses(losses + 1);

      setDesc("Lizard poisons Spock");
    }

    setComputerMove(randomMove);
  };

  const reset = () => {
    setWins(0);
    setDraws(0);
    setLosses(0);
    setComputerMove("");
    setOutcome("play");
    setDesc("play again...");
  };

  let compMoveClass = "computer-move";

  if (computerMove === "Rock") {
    compMoveClass += " class-rock";
  } else if (computerMove === "Paper") {
    compMoveClass += " class-paper";
  } else if (computerMove === "Scissors") {
    compMoveClass += " class-scissors";
  } else if (computerMove === "Lizard") {
    compMoveClass += " class-lizard";
  } else if (computerMove === "Spock") {
    compMoveClass += " class-spock";
  }

  let outcomeClass = "outcome";

  if (outcome === "Win") {
    outcomeClass += " class-win";
  } else if (outcome === "Draw") {
    outcomeClass += " class-draw";
  } else if (outcome === "Loss") {
    outcomeClass += " class-loss";
  }

  const hover = (move) => {
    let hoverClass = 

    console.log(move)


  }

  return (
    <>
      <main>
        <div className="container">
          <div className="headline-container">
            <h1>The Sheldon Cooper's Game</h1>
            <img
              src="https://www.iconbolt.com/iconsets/coreui-brand/atom.svg"
              alt="atom-icon"
            />
          </div>

          <div className="game-container">
            <h2>Choose your move carefully</h2>

            {moves.map((move, index) => (
              <button
                className="option-button"
                id={move}
                key={index}
                onClick={() => {
                  playFunction(move);
                }}
                onMouseEnter={()=>hover(move)}
              ></button>
            ))}
            <p className="comp-move">The Computers move:</p>
            <p className={compMoveClass}></p>
            <p className="description">"{desc}"</p>
            <p className={outcomeClass}>{outcome}</p>
            <div className="result">
              Wins: <span className="span">{wins}</span> 
              Draws: <span className="span">{draws}</span>
              Losses: <span className="span">{losses}</span>
            </div>

            <button className="reset-button" onClick={reset}>
              
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
