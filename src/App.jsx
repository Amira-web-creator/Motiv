import React from "react";
import {
  TopNavbar,
  LeftNavbar,
  MixedBlock,
  Sales,
  RangesBlock,
  Cars,
} from "./myComponents";

import { ranges, cars, ads } from "./data/data";

const App = () => {
 
  return (
    <main className="flex">
      <div>
        <LeftNavbar />
      </div>
      <div className="flex-1">
        <div>
          <TopNavbar />
        </div>
        <div className="middle bg-gray-100 pt-5">
          <RangesBlock endpoint={ranges} />
          <MixedBlock endpoint={ads} />
          <Sales endpoint={cars} />
          <Cars/>
        </div>
      </div>
    </main>
  );
};

export default App;
