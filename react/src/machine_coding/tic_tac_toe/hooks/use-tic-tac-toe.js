import { useReducer } from "react";

const initailBoard = (n) => Array(n).fill(null); // Initall board filled with null, otherwise palyer symbol

const tictactoeHandler = (state, action) => {
  switch (action.type) {
    case "UPDATE_BOARD": {
      let newBoard = [...state.board];
      newBoard[action.index] = state.isX ? "X" : "O";

      return {
        ...state,
        board: newBoard,
      };
    }

    case "SWITCH_PLAYER": {
      return {
        ...state,
        isX: !state.isX,
      };
    }

    case "RESET_BOARD": {
      return {
        ...state,
        board: initailBoard(action.boardSize * action.boardSize),
        isX: true,
      };
    }

    default:
      return state;
  }
};

const useTicTacToe = ({ boardSize }) => {
  const [tictacktoe, dispatch] = useReducer(tictactoeHandler, {
    board: initailBoard(boardSize * boardSize),
    isX: true, // To check for active player
  });

  const { board, isX } = tictacktoe;

  // To generate the Winning COmbos' dynamically from boardSize
  const WINNING_PATTERN = (function () {
    let pattern = [];

    //Horizontal Pattern
    for (let i = 0; i < boardSize; i++) {
      let res = [];
      for (let j = 0; j < boardSize; j++) {
        res.push(j + i * boardSize);
      }
      pattern.push(res);
    }

    //Horizontal Pattern
    for (let i = 0; i < boardSize; i++) {
      let res = [];
      for (let j = 0; j < boardSize; j++) {
        res.push(j * boardSize + i);
      }
      pattern.push(res);
    }

    //Top-left to bottom-right diagonal
    let diagonal1 = [];

    for (let i = 0; i < boardSize; i++) {
      diagonal1.push(i * boardSize + i);
    }
    pattern.push(diagonal1);

    //Top-Right to bottom-left diagonal
    let diagonal2 = [];

    for (let i = 1; i <= boardSize; i++) {
      diagonal2.push(i * (boardSize - 1));
    }
    pattern.push(diagonal2);

    return pattern;
  })();

  // To get the winner of the game
  const getWinner = () => {
    for (let i = 0; i < WINNING_PATTERN.length; i++) {
      let pattern = WINNING_PATTERN[i];

      let firstCell = board[pattern[0]];

      if (firstCell && pattern.every((item) => board[item] === firstCell))
        return firstCell;
    }

    return null;
  };

  // To generate the winner/turn based on the user click
  const statusMessage = () => {
    const winner = getWinner();

    if (winner) return `Player ${winner} wins!`;
    console.log(board);
    if (!board.includes(null)) return "Game is Tied!";

    return `Player ${isX ? "X" : "O"}'s turn`;
  };

  const handleClick = (index) => {
    const winner = getWinner();

    if (winner || board[index]) return;

    dispatch({ type: "UPDATE_BOARD", index: index }); // Updated board with each user click
    dispatch({ type: "SWITCH_PLAYER" }); // Switch Player after click
  };

  const resetHandler = () => {
    dispatch({ type: "RESET_BOARD", boardSize: boardSize });
  };

  return { board, boardSize, handleClick, resetHandler, statusMessage };
};

export default useTicTacToe;
