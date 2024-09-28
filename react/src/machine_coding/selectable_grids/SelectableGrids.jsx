import React, { useState } from "react";

import "./SelectableGrids.css";
import useGrids from "./hooks/use-grids";

const SelectableGrids = () => {
  const [updatedGrid, selectHandler] = useGrids(); // Custom hook to outsource the logic to a seperate file and keep component lean

  return (
    <section className="gridCont">
      {updatedGrid.map((gridValue, index) => (
        <div
          key={Math.random() * 1000}
          onClick={selectHandler}
          onMouseOver={selectHandler}
          className={gridValue.selected ? "active" : ""}
        >
          {gridValue.index}
        </div>
      ))}
    </section>
  );
};

export default SelectableGrids;
