import Box from "./Box";

import { data1, data2 } from "./data";

import "./Cisco.css";
import { useEffect, useState } from "react";

const Cisco = () => {
  const [boxOne, setBoxOne] = useState([]);
  const [boxTwo, setBoxTwo] = useState([]);

  const boxOneHandler = (student) => {
    setBoxOne((prevState) => [...prevState, student]);
    setBoxTwo((prevState) =>
      prevState.filter((item) => item.regID !== student.regID)
    );
  };

  const boxTwoHandler = (student) => {
    setBoxOne((prevState) =>
      prevState.filter((item) => item.regID !== student.regID)
    );
    setBoxTwo((prevState) => [...prevState, student]);
  };

  useEffect(() => {
    Promise.allSettled([data1, data2]).then((data) => {
      let studentsArr = [...data[0].value, ...data[1].value];

      let studentsMap = new Map();

      studentsArr.forEach((item, idx) => {
        studentsMap.set(item.regID, item);
      });

      setBoxOne([...studentsMap.values()]);
    });
  }, []);


  return (
    <section class="sectionCont">
      <Box data={boxOne} boxHandler={boxTwoHandler} />
      <Box data={boxTwo} boxHandler={boxOneHandler} />
    </section>
  );
};

export default Cisco;
