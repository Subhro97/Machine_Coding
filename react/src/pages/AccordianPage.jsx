import React from "react";

import Accordian from "@/components/designPatterns/compoundComponents/Accordian/Accordian";

const AccordianPage = () => {
  return (
    <Accordian>
      <Accordian.Item index={0}>
        <Accordian.Title>Content 1</Accordian.Title>
        <Accordian.Content>This is Content 1!</Accordian.Content>
      </Accordian.Item>
      <Accordian.Item index={1}>
        <Accordian.Title>Content 2</Accordian.Title>
        <Accordian.Content>This is Content 2!</Accordian.Content>
      </Accordian.Item>
      <Accordian.Item index={2}>
        <Accordian.Title>Content 3</Accordian.Title>
        <Accordian.Content>This is Content 3!</Accordian.Content>
      </Accordian.Item>
    </Accordian>
  );
};

export default AccordianPage;
