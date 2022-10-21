import React from "react";
import {  Routes, Route } from "react-router-dom";

import { TopNavbar, LeftNavbar, Cars, MiddleContent , Filter } from "./myComponents";

import { cars  } from "./data/data";

const App = () => {
  return (
    <>
      <main className="flex">
        <div>
          <LeftNavbar />
        </div>
        <div className="flex-1">
          <div>
            <TopNavbar />
          </div>
          <div className="middle h-screen bg-gray-50 pt-5">
            <Routes>
              <Route path="/" element={<MiddleContent />}></Route>
              <Route path="/cars" element={<Cars endpoint={cars} />}></Route>
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
