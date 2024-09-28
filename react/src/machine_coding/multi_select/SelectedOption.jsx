import { useSelectConsumer } from "./MultiSelectCont";

const SelectedOption = ({ value }) => {
  const { removeHandler } = useSelectConsumer();
  return (
    <div className="selected-option">
      <span>{value}</span>
      <span onClick={() => removeHandler(value)}>x</span>
    </div>
  );
};

export default SelectedOption;
