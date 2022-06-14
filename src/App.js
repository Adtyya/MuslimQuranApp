import React from "react";
import Navbar from "./section/Navbar/Navbar";
import Hero from "./section/hero/Hero";
import Read from "./section/read/Read";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-white h-auto w-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/read" element={<Read />} />
      </Routes>
    </div>
  );
};

export default App;
