import { useState } from "react";
import Filter from "../myComponents/utils/Filter";
import CarsProducts from "./utils/CarsProducts";

const Cars = ({ mycars, query }) => {
  let [filterTextValue, setFilterTextValue] = useState("all");

  const checkQuery = (car) => {
    return car.title.toLowerCase().includes(query);
  };

  const checkSelect= (car) => {


    if (filterTextValue === "all") {
      return mycars;
    } else if (filterTextValue === car.text) {
      return filterTextValue === car.text;
    }

  };

  let filteredNumbers = mycars.filter(function (car) {
   return checkQuery(car) && checkSelect(car)

  });

  const onFilterValueSelected = (filterValue) => {
    setFilterTextValue(filterValue);
  };
  return (
    <>
      <div className="car-container">
        <h1 className="font-bold text-xl">Bokking</h1>
        <div className="flex justify-between">
          <div>
            <Filter filterValueSelect={onFilterValueSelected} />
          </div>
          <div className="flex justify-between">
            <img
              src="/public/assets/filter1.png"
              className="w-11 h-11"
              alt="filter"
            />
            <img
              src="/public/assets/filter.png"
              className="w-8 h-8 mt-1"
              alt="filter"
            />
          </div>
        </div>
        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 
    grid-cols-4 xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1`}
        >
          {filteredNumbers.map((item) => (
            <CarsProducts
              key={item.id}
              title={item.title}
              text={item.text}
              fav={item.fav}
              price={item.price}
              img={item.img}
              users={item.users}
              type={item.type}
              kilos={item.kilos}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cars;
