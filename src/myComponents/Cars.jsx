import React from "react";
import Filter from "../myComponents/utils/Filter";
import CarsProducts from "./utils/CarsProducts";

const Cars = ({ mycars }) => {
  return (
    <div className="car-container">
      <h1 className="font-bold text-xl">Bokking</h1>
      <div>
        <Filter />
      </div>
      <div
        className={`grid items-center justify-items-center gap-7 lg:gap-5 
    grid-cols-4 xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1`}
      >
        {mycars.map((item) => (
          <CarsProducts
            key={item.id}
            title={item.title}
            text={item.text}
            fav={item.fav}
            price={item.price}
            img={item.img}
            users={item.users}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Cars;
