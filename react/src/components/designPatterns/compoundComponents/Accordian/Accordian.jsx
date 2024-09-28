import { createContext, useContext, useEffect, useState } from "react";

import "./Accordian.css";

import AccordianItem from "./AccordianItem";
import AccordianTitle from "./AccordianTitle";
import AccordianContent from "./AccordianContent";

const AccordianCtx = createContext();

export const useAccordianCtx = () => {
  const ctx = useContext(AccordianCtx);

  return ctx;
};

const Accordian = ({ children }) => {
  const [activeItem, setActiveItem] = useState(null);

  const accordianState = {
    activeItem: activeItem,
    switchHandler: (id) => {
      setActiveItem((prevState) => {
        console.log(prevState, id);
        if (prevState === id) {
          return null;
        } else {
          return id;
        }
      });
    },
  };

  return (
    <div className="accordian">
      <AccordianCtx.Provider value={accordianState}>
        {children}
      </AccordianCtx.Provider>
    </div>
  );
};

Accordian.Item = AccordianItem;
Accordian.Title = AccordianTitle;
Accordian.Content = AccordianContent;

export default Accordian;
