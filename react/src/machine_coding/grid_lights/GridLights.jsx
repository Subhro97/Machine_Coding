import "./GridLights.css";

import Grid from "./Grid";
import useGridlights from "./hooks/use-grid-lights";

const GridLights = () => {
  const [activeGrids, selectGridHandler] = useGridlights();

  return (
    <div className="grid-cont" onClick={selectGridHandler}>
      {Array.from({ length: 9 }).map((item, idx) => (
        <Grid
          key={`val-${idx}`}
          index={idx}
          isActive={activeGrids.includes(idx)}
        />
      ))}
    </div>
  );
};

export default GridLights;
