import { createContext, useContext } from "react";
import { useAccordianCtx } from "./Accordian";

const AccordianItemCtx = createContext();

export const useAccordianItemCtx = () => {
  const ctx = useContext(AccordianItemCtx);

  return ctx;
};

const AccordianItem = ({ index, children }) => {
  const { activeItem } = useAccordianCtx();

  console.log(activeItem);
  return (
    <div className={`accordian-item ${activeItem === index ? "active" : ""}`}>
      <AccordianItemCtx.Provider value={index}>
        {children}
      </AccordianItemCtx.Provider>
    </div>
  );
};

export default AccordianItem;
