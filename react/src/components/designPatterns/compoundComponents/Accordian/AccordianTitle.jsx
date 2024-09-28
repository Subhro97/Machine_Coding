import { useAccordianCtx } from "./Accordian";
import { useAccordianItemCtx } from "./AccordianItem";

const AccordianTitle = ({ children }) => {
  const { switchHandler } = useAccordianCtx();
  const itemIdx = useAccordianItemCtx();

  return (
    <div
      onClick={() => {
        console.log("Clicked");
        switchHandler(itemIdx);
      }}
      className="accordian-title"
    >
      {children}
    </div>
  );
};

export default AccordianTitle;
