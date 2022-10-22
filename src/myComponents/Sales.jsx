import React from "react";
import ItemTwo from "./utils/ItemTwo";

const Sales = ({ mycars }) => {
  return (
    <div className="car-container">
      <div
        className={`grid items-center justify-items-center gap-7 lg:gap-5 
    grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1`}
      >
        {mycars.map((item) => (
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
            color={item.color}
            howRecomended={item.howRecomended}
          />
        ))}
      </div>
    </div>
  );
};

export default Sales;
