import React from "react";
import { MixedBlock, Sales, RangesBlock } from "../myComponents";
import { ranges, ads } from "../data/data";

const MiddleContent = () => {
  return (
    <div>
      <RangesBlock endpoint={ranges} />
      <MixedBlock endpoint={ads} />
      <Sales />
    </div>
  );
};

export default MiddleContent;
