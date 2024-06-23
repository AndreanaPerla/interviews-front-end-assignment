import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const check = localStorage.getItem("recipes");
    if (check) {
      setRecipes(JSON.parse(check));
    } else {
      const api = await fetch("http://localhost:8080/recipes");
      const data = await api.json();

      localStorage.setItem("recipes", JSON.stringify(data));

      setRecipes(data);

      // console.log(data);
    }
  };

  return (
    <Grid>
      {recipes.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <Gradient />
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  column-gap: 3rem;
  row-gap: 2rem;
`;
const Card = styled.div`
  min-height: 20rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a {
    text-decoration: none;
  }
  h4 {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Recipes;
