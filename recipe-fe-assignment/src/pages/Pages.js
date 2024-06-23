import { Route, Routes, BrowserRouter } from "react-router-dom";

import React from "react";
import Home from "./Home";
import Diets from "../components/Diets";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diets/:type" element={<Diets />} />
    </Routes>
  );
}

export default Pages;
