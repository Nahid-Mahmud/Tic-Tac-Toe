/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";

function Squire({ value, onSquireClick }) {
  return (
    <Fragment>
      <button
        onClick={onSquireClick}
        className=" bg-white border border-gray-700 h-20 w-20 m-1 leading-9 text-2xl font-bold "
      >
        {value}
      </button>
    </Fragment>
  );
}

function Board({ xIsNext, squires, onPlay }) {
  const winner = calculateWinner(squires);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }
  // function for click
  const handleClick = (index) => {
    const nextSquires = squires.slice();

    if (squires[index] || calculateWinner(squires)) return;

    if (xIsNext) {
      nextSquires[index] = "X";
    } else {
      nextSquires[index] = "O";
    }
    onPlay(nextSquires);
  };
  return (
    <Fragment>
      <div>{status}</div>
      <div className="flex">
        <Squire value={squires[0]} onSquireClick={() => handleClick(0)} />
        <Squire value={squires[1]} onSquireClick={() => handleClick(1)} />
        <Squire value={squires[2]} onSquireClick={() => handleClick(2)} />
      </div>

      <div className="flex">
        <Squire value={squires[3]} onSquireClick={() => handleClick(3)} />
        <Squire value={squires[4]} onSquireClick={() => handleClick(4)} />
        <Squire value={squires[5]} onSquireClick={() => handleClick(5)} />
      </div>

      <div className="flex">
        <Squire value={squires[6]} onSquireClick={() => handleClick(6)} />
        <Squire value={squires[7]} onSquireClick={() => handleClick(7)} />
        <Squire value={squires[8]} onSquireClick={() => handleClick(8)} />
      </div>
    </Fragment>
  );
}

export default function Game() {
  // state for all squires
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // state for next player
  const [xIsNext, setXIsNext] = useState(true);

  // current m0ve

  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    setXIsNext((prev) => !prev);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  //Jup to function
  const jumpTo = (move) => {
    setCurrentMove(move);
    setXIsNext(!!(move % 2 === 0));
  };
  // setting the history
  const moves = history.map((squires, move) => {
    let description;
    if (move > 0) {
      description = `Go to move # ${move}`;
    } else {
      description = "Make Your First Move";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}> {description} </button>
      </li>
    );
  });

  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squires={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
