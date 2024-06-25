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
      <Grid>
        {cuisinesList.map((item) => {
          return (
            <Card key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <Gradient />
            </Card>
          );
        })}
      </Grid>
    </Wrapper>
  );
}

export default Cuisines;
