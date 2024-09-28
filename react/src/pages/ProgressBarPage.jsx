import ProgressBar from "@/machine_coding/progress_bar/ProgressBar.jsx";
import { useState } from "react";

const ProgressBarPage = () => {
  const [startBar, setStartBar] = useState(1);

  function completeHandler() {
    setStartBar((val) => val + 1);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <ProgressBar
        key="p-1"
        index={1}
        activeBar={startBar}
        onComplete={completeHandler}
      />
      <ProgressBar
        key="p-2"
        index={2}
        activeBar={startBar}
        onComplete={completeHandler}
      />
      <ProgressBar
        key="p-3"
        index={3}
        activeBar={startBar}
        onComplete={completeHandler}
      />
    </div>
  );
};

export default ProgressBarPage;
