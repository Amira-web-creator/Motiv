import React from "react";
import { MixedBlock, Sales, RangesBlock } from "../myComponents";
import { ranges, ads } from "../data/data";

const MiddleContent = ({ mycars }) => {
  return (
    <div>
      <RangesBlock endpoint={ranges} />
      <MixedBlock endpoint={ads} />
      <Sales mycars={mycars} />
    </div>
  );
};

export default MiddleContent;
