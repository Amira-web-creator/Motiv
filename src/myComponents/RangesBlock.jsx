import React from "react";
import Item from "./utils/Item";

const RangesBlock = ({ endpoint: { items } }) => {
  return (
    <div className="car-container">
      <div className="grid items-center justify-items-center gap-8 lg:gap-5 grid-cols-4 xl:grid-cols-2 sm:grid-cols-1">
        {items?.map((item, i) => (
          <Item {...item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default RangesBlock;
