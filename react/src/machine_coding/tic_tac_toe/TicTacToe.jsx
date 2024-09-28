import Header from "./components/Header";
import Board from "./components/Board";
import useTicTacToe from "./hooks/use-tic-tac-toe";

import "./TicTacToe.css";

const TicTacToe = () => {
  const { board, boardSize, handleClick, resetHandler, statusMessage } =
    useTicTacToe({
      boardSize: 4,
    });
  return (
    <section className="tictactoe">
      <Header resetHandler={resetHandler} statusMessage={statusMessage} />
      <Board board={board} handleClick={handleClick} boardSize={boardSize} />
    </section>
  );
};

export default TicTacToe;
