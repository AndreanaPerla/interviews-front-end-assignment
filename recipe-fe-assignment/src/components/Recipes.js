import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "../utils/Grid";
import Card from "../utils/Card";
import Gradient from "../utils/Gradient";
import { DataContext } from "../context/DataContext";

function Recipes() {
  const { recipes, getRecipes, getCuisines, getDifficulties, getDiets } =
    useContext(DataContext);

  useEffect(() => {
    getRecipes();
    getCuisines();
    getDifficulties();
    getDiets();
  }, []);

  return (
    <Grid>
      {recipes.map((item) => {
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
  );
}

export default Recipes;
