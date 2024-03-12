import React from 'react';
import { useState } from 'react';
import './TicTacToe.css';




function Square({value, onSquareClick}) {
    return <button onClick={onSquareClick} className="square">{value}</button>
}

function Board({turn, squares, onPlay}) {
    const winner = calculateWinner(squares);
    let status;

    status = winner ? "Winner: " + winner : "Next player: " + (turn ? "X" : "O");

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = turn ? 'X' : 'O';
        onPlay(nextSquares);
    }

    return <>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
  </>
}


function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const turn = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    const moves = history.map((squares, move) => {
        let description = move ? 'Go to move #' + move : 'Go to game start';
        return (
            <li key={"move n°" + move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board turn={turn} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
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
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function App() {
    return <Game />
}

export default App;