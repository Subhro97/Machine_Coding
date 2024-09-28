import { Link } from "react-router-dom";

const RootLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
        List of all React Projects!
      </h1>
      <Link to="accordian">Accordian</Link>
      <Link to="earch-list">Search List</Link>
      <Link to="context-cart">Context Cart</Link>
      <Link to="redux-cart">Redux Cart</Link>
      <Link to="hoc">HOC</Link>
      <Link to="file-explorer">File Explorer</Link>
      <Link to="file-explorer-two">File Explorer 2</Link>
      <Link to="progress-bar">Progress Bar</Link>
      <Link to="comment-box">Comment Box</Link>
      <Link to="stepper">Stepper</Link>
      <Link to="multi-select">Multi Select</Link>
      <Link to="cisco">Cisco</Link>
      <Link to="tic-tac-toe">Tic Tac Toe</Link>
      <Link to="selectable-grids">Selectable Grids</Link>
      <Link to="timer-page">Timer Page</Link>
      <Link to="cart-page">Cart Page</Link>
      <Link to="grid-lights-page">Grid Lights Page</Link>
    </div>
  );
};

export default RootLayout;
