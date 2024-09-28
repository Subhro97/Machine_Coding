import "./Timer.css";
import useTimer from "./hooks/use-timer";

const Timer = () => {
  const [isStarted, time, resetHandler, timerHandler, inputChangeHandler] =
    useTimer();

  return (
    <section className="timerSection">
      <h2>Countdown Timer</h2>

      <div className="timerCont">
        <div className="timerInitials">
          <span>Hours</span>
          <span>Minutes</span>
          <span>Seconds</span>
        </div>
        <div className="timerFields">
          <input
            type="number"
            placeholder="00"
            value={time.hrs}
            data-tag="hrs"
            onChange={inputChangeHandler}
          />
          <span>:</span>
          <input
            type="number"
            placeholder="00"
            value={time.min}
            data-tag="min"
            onChange={inputChangeHandler}
          />
          <span>:</span>
          <input
            type="number"
            placeholder="00"
            value={time.sec}
            data-tag="sec"
            onChange={inputChangeHandler}
          />
        </div>
      </div>

      <div className="timerBtns">
        <button
          onClick={timerHandler}
          className={`controlBtn ${isStarted ? "hold" : ""}`}
        >
          {isStarted ? "Stop" : "Start"}
        </button>
        <button className="resetBtn" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Timer;
