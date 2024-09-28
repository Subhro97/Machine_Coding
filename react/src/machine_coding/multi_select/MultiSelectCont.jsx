import { createContext, useContext, useRef, useState } from "react";

import SelectedOption from "./SelectedOption";
import SelectItem from "./SelectItem";

const SelectCtx = createContext({
  uniqueSelectedItems: null,
  selectedItem: () => {},
});

export const useSelectConsumer = () => {
  return useContext(SelectCtx);
};

const MultiSelectCont = ({ children }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selecteditemsArr, setSelecteditemsArr] = useState([]); // List tof the select Items Components
  const [uniqueSelectedItems, setUniqueSelectedItems] = useState(new Set()); // To remove already selected items from the drop down list

  const inputRef = useRef(null);

  const inputHandler = (e) => {
    const value = e.target.value.trim();

    if (value.length > 0 && !showOptions) {
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
    if (
      value.length === 0 &&
      e.key === "Backspace" &&
      selecteditemsArr.length > 0
    ) {
      selectStore.removeHandler(
        selecteditemsArr[selecteditemsArr.length - 1].props.value
      );
    }
  };

  const selectStore = {
    uniqueSelectedItems: uniqueSelectedItems,

    selectedItem: (value) => {
      setUniqueSelectedItems((state) => {
        const newSet = new Set([...state]);
        newSet.add(value);
        return newSet;
      });

      setSelecteditemsArr((prevState) => {
        if (!prevState.includes(value)) {
          inputRef.current.value = "";
          inputRef.current.focus();

          return [
            ...prevState,
            <SelectedOption key={Date.now().toFixed(2)} value={value} />,
          ];
        }
      });
    },

    removeHandler: (value) => {
      setShowOptions(false);

      setUniqueSelectedItems((state) => {
        const newSet = new Set([...state]);
        newSet.delete(value);
        return newSet;
      });

      setSelecteditemsArr((prevState) => {
        const currentSelects = [...prevState].filter(
          (item) => item.props.value !== value
        );

        return currentSelects;
      });
    },
  };

  return (
    <SelectCtx.Provider value={selectStore}>
      <div className="multi-select-cont">
        <div className="multi-select-input">
          {/* List of Pills */}
          {selecteditemsArr}
          {/* Enter Input text*/}
          <input
            ref={inputRef}
            type="text"
            onKeyUp={inputHandler}
            placeholder="Search Items here..."
          />
        </div>
        <ul style={{ display: `${showOptions ? "flex" : "none"}` }}>
          {children}
        </ul>
      </div>
    </SelectCtx.Provider>
  );
};

MultiSelectCont.Item = SelectItem;

export default MultiSelectCont;
