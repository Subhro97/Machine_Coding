import { useSelectConsumer } from "./MultiSelectCont";

const SelectItem = ({ value }) => {
  const { uniqueSelectedItems, selectedItem } = useSelectConsumer();

  if (uniqueSelectedItems.has(value)) return <></>;

  return <li onClick={() => selectedItem(value)}>{value}</li>;
};

export default SelectItem;
