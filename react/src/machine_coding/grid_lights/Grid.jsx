import { memo } from "react";

const Grid = memo(({ index, isActive }) => {
  return (
    <div
      className={`grid-item ${isActive ? "active" : ""}`}
      data-index={index}
    ></div>
  );
});

export default Grid;
