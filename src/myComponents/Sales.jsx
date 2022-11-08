import React, { useEffect } from "react";
import ItemTwo from "./utils/ItemTwo";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../features/cars/carSlice";

const Sales = () => {
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

  return (
    <div className="car-container mt-5">
      <div
        className={`grid items-center justify-items-center gap-7 lg:gap-5 
    grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1`}
      >
        {car.loading && <p>...Loading</p>}
        {!car.loading && car.error ? <p>Error:{car.error}</p> : null}
        {!car.loading && loadedCars.length ? (
          <>
            {loadedCars.map((item) => (
              <ItemTwo
                key={item.id}
                title={item.title}
                text={item.text}
                fav={item.fav}
                price={item.price}
                img={item.img}
                users={item.users}
                type={item.type}
                home={item.home}
                kilos={item.kilos}
                howRecomended={item.howRecomended}
              />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Sales;
