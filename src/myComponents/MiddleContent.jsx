import React from "react";
import { MixedBlock, Sales, RangesBlock } from "../myComponents";
import { ranges, cars, ads } from "../data/data";

const MiddleContent = () => {
  return (
    <div>
      <RangesBlock endpoint={ranges} />
      <MixedBlock endpoint={ads} />
      <Sales endpoint={cars} />
    </div>
  );
};

export default MiddleContent;
