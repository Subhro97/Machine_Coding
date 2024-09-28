import StepperCont from "./StepperCont";

import "./Stepper.css";

const Stepper = () => {
  return (
    <StepperCont title="Shopping Cart">
      <StepperCont.Item num="1" title="Customer Info" />
      <StepperCont.Item num="2" title="Shopping Info" />
      <StepperCont.Item num="3" title="Payment" />
      <StepperCont.Item num="4" title="Delivered" isLast={true} />
    </StepperCont>
  );
};

export default Stepper;
