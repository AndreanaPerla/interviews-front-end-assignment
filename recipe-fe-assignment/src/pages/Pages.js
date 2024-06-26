import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";

import React from "react";
import Home from "./Home";
import Diets from "./Diets";
import Cuisines from "./Cuisines";
import Difficulties from "./Difficulties";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/diets/:type" element={<Diets />} />
        <Route path="/cuisines/:type" element={<Cuisines />} />
        <Route path="/difficulties/:type" element={<Difficulties />} />
        <Route path="/searched/:search/" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
