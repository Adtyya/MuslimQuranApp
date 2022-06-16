import React from "react";
import Navbar from "./section/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, Lists, Readdetail } from "./pages";
import Footer from "./section/footer/Footer";

const App = () => {
  return (
    <div className="bg-white h-auto w-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Lists />} />
        <Route path="/read/s=:name/no=:id" element={<Readdetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
