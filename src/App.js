import React, { useEffect } from "react";
import Navbar from "./section/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home, Lists, Readdetail } from "./pages";
import Footer from "./section/footer/Footer";
import { useDispatch } from "react-redux";
import { listsSurah } from "./actions/listsSurah";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listsSurah());
  }, [dispatch]);
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
