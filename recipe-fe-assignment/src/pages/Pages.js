import { Route, Routes, BrowserRouter } from "react-router-dom";

import React from "react";
import Home from "./Home";
import Diets from "../components/Diets";
import Cuisines from "../components/Cuisines";
import Difficulties from "../components/Difficulties";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diets/:type" element={<Diets />} />
      <Route path="/cuisines/:type" element={<Cuisines />} />
      <Route path="/difficulties/:type" element={<Difficulties />} />
    </Routes>
  );
}

export default Pages;
