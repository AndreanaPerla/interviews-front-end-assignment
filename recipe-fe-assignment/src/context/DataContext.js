import { createContext, useState } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [diets, setDiets] = useState([]);

  const getRecipes = async () => {
    const check = localStorage.getItem("recipes");
    if (check) {
      setRecipes(JSON.parse(check));
    } else {
      const api = await fetch("http://localhost:8080/recipes");
      const data = await api.json();

      localStorage.setItem("recipes", JSON.stringify(data));

      setRecipes(data);

      console.log("RECIPES", data);
    }
  };

  const getCuisines = async () => {
    const check = localStorage.getItem("cuisines");
    if (check) {
      setCuisines(JSON.parse(check));
    } else {
      const api = await fetch("http://localhost:8080/cuisines");
      const data = await api.json();

      localStorage.setItem("cuisines", JSON.stringify(data));

      setCuisines(data);

      console.log("CUISINES", data);
    }
  };

  const getDifficulties = async () => {
    const check = localStorage.getItem("difficulties");
    if (check) {
      setDifficulties(JSON.parse(check));
    } else {
      const api = await fetch("http://localhost:8080/difficulties");
      const data = await api.json();

      localStorage.setItem("difficulties", JSON.stringify(data));

      setDifficulties(data);

      console.log("DIFFICULTIES", data);
    }
  };

  const getDiets = async () => {
    const check = localStorage.getItem("diets");
    if (check) {
      setDiets(JSON.parse(check));
    } else {
      const api = await fetch("http://localhost:8080/diets");
      const data = await api.json();

      localStorage.setItem("diets", JSON.stringify(data));

      setDiets(data);

      console.log("DIETS", data);
    }
  };

  const value = {
    recipes,
    cuisines,
    difficulties,
    diets,
    setRecipes,
    setCuisines,
    setDifficulties,
    setDiets,
    getRecipes,
    getCuisines,
    getDifficulties,
    getDiets,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataContextProvider;
