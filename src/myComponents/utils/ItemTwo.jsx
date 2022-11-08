import React from "react";
import "./ItemTwo.css";

const ItemTwo = ({ id, title, price, img, kilos, howRecomended, home }) => {
  if (home) {
    return (
      <>
        <div
          className={`relative homeCar items-center justify-items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
        >
          <div className="grid items-start justify-items-start xl:justify-center xl:justify-items-center">
            <div className="text-black filter drop-shadow-sm text-sm font-medium flex justify-center">
              <span className="mr-2">
                <img src="../assets/recomended.svg" />
              </span>

              <span className="mr-1">{howRecomended}</span>
              <span>Recomended</span>
            </div>
            <div className="flex items-center justify-center ">
              <img
                src={`assets/${img}`}
                alt={`img/item-img/${id}`}
                className="transitions-theme hover:-rotate-12 max-w-full h-auto"
              />
            </div>
            <h1 className="text-black text-sm  font-medium filter drop-shadow-sm ">
              {title}
            </h1>

            <div className="bottom-items text-slate-500 w-full xl-w-80  m-auto flex justify-between mt-2 ">
              <div className="flex justify-between w-32">
                <div className="icon">
                  <img src="../assets/sign1.svg" className="w-4" alt="sign1" />
                </div>

                <div className="text-xs">
                  {kilos}
                  <span>k</span>
                </div>
                <div className="icon">
                  <img
                    src="../assets/settings-icon.svg"
                    className="w-3"
                    alt="settings"
                  />
                </div>
                <div className="icon">
                  <img
                    src="../assets/energy-icon.svg"
                    className="w-3"
                    icon="energy"
                  />
                </div>
              </div>

              <div className="text-xs">
                ${price}
                <span>/h</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ItemTwo;
