import { useEffect, useRef, useState } from "react";

import "./ProgressBar.css";

const ProgressBar = ({ index, activeBar, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    if (index === activeBar) {
      timer.current = setInterval(() => {
        setProgress((val) => val + 1);
      }, 10);
    }
  }, [activeBar]);

  useEffect(() => {
    if (progress === 500) {
      clearInterval(timer.current);
      onComplete();
    }
  }, [progress]);

  return (
    <div className="progress-bar-cont">
      <div style={{ color: progress > 249 ? "white" : "black" }}>
        {progress}%
      </div>
      <div
        className="progress-bar"
        style={{
          transform: `scaleX(${progress / 500})`,
          transformOrigin: "left",
        }}
      />
    </div>
  );
};

export default ProgressBar;
