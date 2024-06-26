import Recipes from "../components/Recipes";
import Wrapper from "../utils/Wrapper";
import { motion } from "framer-motion";

import React from "react";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Wrapper>
        <Recipes />
      </Wrapper>
    </motion.div>
  );
}

export default Home;
