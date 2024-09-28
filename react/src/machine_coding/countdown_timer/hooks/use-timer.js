import { useState, useRef } from "react";

const useTimer = () => {
  const [time, setTime] = useState({ hrs: "", min: "", sec: "" });
  const [isStarted, setIsStarted] = useState(false);

  let timerRef = useRef("");

  function convertToTotalSeconds({ hrs, min, sec }) {
    return (
      (parseInt(hrs, 10) || 0) * 3600 +
      (parseInt(min, 10) || 0) * 60 +
      (parseInt(sec, 10) || 0)
    );
  }

  function timerHandler(e) {
    let totalSeconds = convertToTotalSeconds(time);

    if (!isStarted) {
      setIsStarted(true);

      timerRef.current = setInterval(() => {
        totalSeconds = totalSeconds - 1;

        if (totalSeconds < 0) {
          clearInterval(timerRef.current);
          setIsStarted(false);
          return { hrs: "", min: "", sec: "" };
        }

        setTime((timerObj) => {
          let newObj = { ...timerObj };

          newObj.hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");

          newObj.min = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
            2,
            "0"
          );

          newObj.sec = String((totalSeconds % 3600) % 60).padStart(2, "0");

          return newObj;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      setIsStarted(false);
    }
  }

  function resetHandler() {
    clearInterval(timerRef.current);
    setTime({ hrs: "", min: "", sec: "" });
    setIsStarted(false);
  }

  function inputChangeHandler(e) {
    const { tag } = e.target.dataset;

    setTime((timeObj) => {
      let newObj = { ...timeObj };

      newObj[tag] = Number(e.target.value);

      return newObj;
    });
  }

  return [isStarted, time, resetHandler, timerHandler, inputChangeHandler];
};

export default useTimer;
