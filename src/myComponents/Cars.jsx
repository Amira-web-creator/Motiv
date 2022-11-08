import { useState } from "react";
import Filter from "../myComponents/utils/Filter";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../features/cars/carSlice";
import CarsProducts from "../myComponents/utils/CarsProducts";

const Cars = ({ query }) => {
  const dispatch = useDispatch();
  const car = useSelector((state) => state.cars);
  const responseData = car.cars;

  const loadedCars = [];
  for (const key in responseData) {
    loadedCars.push({
      id: key,
      title: responseData[key].title,
      text: responseData[key].text,
      fav: responseData[key].fav,
      howRecomended: responseData[key].howRecomended,
      btn: responseData[key].btn,
      img: responseData[key].img,
      kilos: responseData[key].kilos,
      color: responseData[key].color,
      users: responseData[key].users,
      type: responseData[key].type,
      price: responseData[key].price,
      home: responseData[key].home,
    });
  }

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  let [filterTextValue, setFilterTextValue] = useState("all");

  const checkQuery = (car) => {
    return car.title.toLowerCase().includes(query);
  };

  const checkSelect = (car) => {
    if (filterTextValue === "all") {
      return loadedCars;
    } else if (filterTextValue === car.text) {
      return filterTextValue === car.text;
    }
  };

  let filteredNumbers = loadedCars.filter(function (car) {
    return checkQuery(car) && checkSelect(car);
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
            <img src="assets/filter1.png" className="w-11 h-11" alt="filter" />
            <img
              src="assets/filter.png"
              className="w-8 h-8 mt-1"
              alt="filter"
            />
          </div>
        </div>

        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 
    grid-cols-4 xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1`}
        >
          {car.loading && <p>...Loading</p>}
          {!car.loading && car.error ? <p>Error:{car.error}</p> : null}
          {!car.loading && loadedCars.length ? (
            <>
              {filteredNumbers.map((car) => (
                <CarsProducts
                  key={car.id}
                  title={car.title}
                  text={car.text}
                  fav={car.fav}
                  price={car.price}
                  img={car.img}
                  users={car.users}
                  type={car.type}
                  kilos={car.kilos}
                />
              ))}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Cars;
