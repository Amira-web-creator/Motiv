import React from "react";
import Item from "./utils/CarsProducts";
import Filter from "../myComponents/utils/Filter"


const Cars = ({ endpoint: { items } }) => {
  return (
    <div className="car-container">
      <h1 className="font-bold text-xl">Bokking</h1>
      <div>
        <Filter/>
      </div>
      <div
        className={`grid items-center justify-items-center gap-7 lg:gap-5 
    grid-cols-4 xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1`}
      >
        {items?.map((item, i) => (
          <Item {...item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
