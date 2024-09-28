import React from "react";

const Board = ({ board, handleClick, boardSize }) => {
  return (
    <div
      className="board"
      style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}
    >
      {board.map((value, index) => (
        <button
          className="grid"
          key={Math.random() * index}
          onClick={() => handleClick(index)}
          disabled={value !== null}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default Board;
