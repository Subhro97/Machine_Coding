import MultiSelectCont from "./MultiSelectCont";

import "./MultiSelect.css";

const MultiSelect = () => {
  return (
    <MultiSelectCont>
      <MultiSelectCont.Item value={"Gojo"} />
      <MultiSelectCont.Item value={"Sukuna"} />
      <MultiSelectCont.Item value={"Zenitsu"} />
      <MultiSelectCont.Item value={"Kakarrot"} />
      <MultiSelectCont.Item value={"Kakashi"} />
    </MultiSelectCont>
  );
};

export default MultiSelect;
