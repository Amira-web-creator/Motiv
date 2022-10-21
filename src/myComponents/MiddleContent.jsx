import React from "react";
import { MixedBlock, Sales, RangesBlock } from "../myComponents";
import { ranges, carsHome, ads } from "../data/data";

const MiddleContent = () => {
  return (
    <div>
      <RangesBlock endpoint={ranges} />
      <MixedBlock endpoint={ads} />
      <Sales endpoint={carsHome} />
    </div>
  );
};

export default MiddleContent;
