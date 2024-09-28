import { WithCounter } from "@/components/hoc/WithCounter.jsx";
import useMemoCustom from "../pollyfills/use-memo-custom";
import { useCallback, useEffect, useState } from "react";
import useCallbackCustom from "../pollyfills/use-callback-custom";

const Counter = ({ name, increase, value: count }) => {
  const [anotherCount, setAnotherCount] = useState(0);

  const memoizedTest = useCallbackCustom(function test() {}, [count]);

  useEffect(() => {
    console.log("Function Changed");
  }, [memoizedTest]);

  function square() {
    console.log("Executing");

    return count * count;
  }

  const squaredValue = useMemoCustom(square, [count]);

  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <h1>Squared Value - {squaredValue}</h1>
      <button onClick={increase}>
        {name} Clicked {count} times
      </button>
      <button onClick={() => setAnotherCount((prevState) => prevState + 1)}>
        Count - {anotherCount}
      </button>
    </div>
  );
};

export default WithCounter(Counter, 5);
