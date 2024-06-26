import React, { useState, useContext, useEffect } from "react";
import Grid from "../utils/Grid";
import Card from "../utils/Card";
import Gradient from "../utils/Gradient";
import Wrapper from "../utils/Wrapper";
import { motion } from "framer-motion";
import { Link, useParams, useLocation } from "react-router-dom";
import { DataContext } from "../context/DataContext";

function Cuisines() {
  const { cuisinesList, getCuisinesList } = useContext(DataContext);
  let params = useParams();
  let location = useLocation();

  useEffect(() => {
    getCuisinesList(location.state);
  }, [params.type]);

  return (
    <Wrapper>
      <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {cuisinesList.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <Gradient />
              </Link>
            </Card>
          );
        })}
      </Grid>
    </Wrapper>
  );
}

export default Cuisines;
