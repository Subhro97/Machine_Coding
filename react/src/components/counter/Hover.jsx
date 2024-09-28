import { WithCounter } from "@/components/hoc/WithCounter.jsx";

const Counter = ({ name, increase, value: count }) => {
  return (
    <div>
      <h2 onMouseOver={increase}>
        {name} Clicked {count} times
      </h2>
    </div>
  );
};

export default WithCounter(Counter, 5);
