import { useState } from "react";

export const WithCounter = (WrapperComponent, count) => {
  return function ({ name, ...props }) {
    const [value, setValue] = useState(count);

    const handleIncrease = () => {
      setValue((prevState) => prevState + count);
    };

    return (
      <WrapperComponent
        name={name}
        increase={handleIncrease}
        value={value}
        {...props}
      />
    );
  };
};
