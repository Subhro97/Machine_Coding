import React, { useState } from "react";

// The entire grids to be displayed and mainted in state to showcase any changes
let grids = Array.from({ length: 150 }, (_, idx) => {
  return { index: idx + 1, selected: false, clicked: false };
});

const useGrids = () => {
  const [updatedGrid, setUpdatedGrid] = useState(grids);

  function selectHandler(e) {
    const index = e.target.innerHTML - 1; // Extracting the grid value

    if (e.type === "click") {
      // If clicked twice to unselect all
      if (updatedGrid.some((item) => item.clicked === true))
        setUpdatedGrid(grids);
      else {
        setUpdatedGrid((grid) => {
          let newGrid = JSON.parse(JSON.stringify(grid));

          newGrid[index]["selected"] = true;
          newGrid[index]["clicked"] = true;

          return newGrid;
        });
      }
    } else {
      const grid = updatedGrid.filter((item) => item.clicked === true);

      // To selected hovered grids only if an grid is previously selected
      if (grid.length > 0) {
        setUpdatedGrid((prevGrid) => {
          let newGrid = JSON.parse(JSON.stringify(prevGrid));

          // Extracting the selected grid co-ordinates
          const selectedRow = Math.floor((grid[0].index - 1) / 15), // Each row element starts with the multiple of 15(0-based)
            selectedCol = Math.floor((grid[0].index - 1) % 15); // Each col element is the remander of division by 15

          // Extracting the hovered grid co-ordinates
          const hoveredRow = Math.floor(index / 15),
            hoveredCol = Math.floor(index % 15);

          for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 15; j++) {
              if (
                i <= hoveredRow &&
                i >= selectedRow &&
                j <= hoveredCol &&
                j >= selectedCol
              )
                newGrid[i * 15 + j]["selected"] = true;
              // Setting only the grids betwwen selected row, hovered rows, selected cols and hovered cols
              else newGrid[i * 15 + j]["selected"] = false;
            }
          }

          return newGrid;
        });
      }
    }
  }

  return [updatedGrid, selectHandler];
};

export default useGrids;
