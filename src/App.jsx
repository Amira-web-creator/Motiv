import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  TopNavbar,
  LeftNavbar,
  Cars,
  MiddleContent,
  Filter,
} from "./myComponents";

const App = () => {
  const [mycars, setCars] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch(
        "https://cars-f11ac-default-rtdb.firebaseio.com/cars.json"
      );
      const responseData = await response.json();
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

      setCars(loadedCars);
    };
    fetchCars();
  }, []);

  return (
    <>
      <nav>
        <LeftNavbar />
      </nav>
      <header>
        <TopNavbar mycars={mycars} setQuery={setQuery} />
      </header>

      <main className="pt-5 bg-gray-50">
        <Routes>
          <Route path="/" element={<MiddleContent mycars={mycars} className="pt-5" />}></Route>
          <Route
            path="/cars"
            element={<Cars mycars={mycars} query={query} />}
          ></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
