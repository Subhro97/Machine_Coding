import { useState, useCallback } from "react";

const useGridlights = () => {
  const [activeGrids, setActiveGrids] = useState([]);

  const selectGridHandler = useCallback(function (e) {
    const { index } = e.target.dataset;

    if (!index) return;

    setActiveGrids((prevGrids) => {
      let newArr = [...prevGrids];
      newArr.unshift(Number(index));

      if (newArr.length === 8) {
        setTimeout(() => {
          deactivateGrids();
        }, 3000);
      }

      return newArr;
    });
  }, []);

  const deactivateGrids = useCallback(function () {
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        setActiveGrids((prevGrids) => prevGrids.slice(1));
      }, 500 * i);
    }
  }, []);
  return [activeGrids, selectGridHandler];
};

export default useGridlights;
