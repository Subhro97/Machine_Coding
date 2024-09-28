import React from "react";

const Header = ({ resetHandler, statusMessage }) => {
  return (
    <div className="status">
      <p>{statusMessage()}</p>
      <button className="reset" onClick={resetHandler}>Reset Game</button>
    </div>
  );
};

export default Header;
