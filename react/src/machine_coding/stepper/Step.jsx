import { useStepConsumer } from "./StepperCont";

const Step = ({ num, title, isLast = false }) => {
  const { activeStep } = useStepConsumer();

  return (
    <div
      className={`step-cont ${activeStep == num ? "active" : ""} ${
        activeStep > num ? "success" : ""
      }`}
    >
      <p className="step-num">{activeStep > num ? "✓" : num}</p>
      <p className="step-title">{title}</p>
      {!isLast && (
        <div className="step-line">
          <div className="progress-bar"></div>
        </div>
      )}
    </div>
  );
};

export default Step;
