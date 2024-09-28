import { createContext, useContext, useState } from "react";

import Step from "./Step";

const StepCtx = createContext({
  activeStep: null,
  totalSteps: null,
});

export const useStepConsumer = () => {
  return useContext(StepCtx);
};

const StepperCont = ({ title, children }) => {
  const [activeStep, setActiveStep] = useState(1);

  const stepStore = {
    activeStep: activeStep,
    totalSteps: 4,
  };

  return (
    <StepCtx.Provider value={stepStore}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "40px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {title}
        </h1>
        <div className="stepper">{children}</div>
        {stepStore.activeStep > stepStore.totalSteps ? (
          ""
        ) : (
          <button
            style={{
              marginTop: "40px",
              border: "1px solid black",
              padding: "10px 20px",
              borderRadius: "5px",
              background: "rgba(194, 193, 193,.3)",
            }}
            onClick={() => {
              // if (stepStore.activeStep == stepStore.totalSteps) setActiveStep(1);
              setActiveStep((value) => value + 1);
            }}
          >
            {stepStore.activeStep == stepStore.totalSteps ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </StepCtx.Provider>
  );
};

StepperCont.Item = Step;

export default StepperCont;
