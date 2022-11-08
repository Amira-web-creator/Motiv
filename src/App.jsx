import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { TopNavbar, LeftNavbar, Cars, MiddleContent } from "./myComponents";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <nav>
        <LeftNavbar />
      </nav>
      <header>
        <TopNavbar setQuery={setQuery} />
      </header>

      <main className="pt-5 bg-gray-50">
        <Routes>
          <Route path="/" element={<MiddleContent className="pt-5" />}></Route>
          <Route path="/cars" element={<Cars query={query} />}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
