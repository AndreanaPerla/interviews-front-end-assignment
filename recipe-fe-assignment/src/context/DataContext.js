import { createContext, useState } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  const [cuisines, setCuisines] = useState([]);
  const [cuisinesList, setCuisinesList] = useState([]);

  const [difficulties, setDifficulties] = useState([]);
  const [difficultiesList, setDifficultiesList] = useState([]);

  const [diets, setDiets] = useState([]);
  const [dietList, setDietList] = useState([]);

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

  const getCuisinesList = async (cuisineId) => {
    var cuisines = [];
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].cuisineId === cuisineId) {
        cuisines.push(recipes[i]);
      }

      setCuisinesList(cuisines);
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

  const getDifficultiesList = async (difficultyId) => {
    var difficulties = [];
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].difficultyId === difficultyId) {
        difficulties.push(recipes[i]);
      }

      setDifficultiesList(difficulties);
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

  const getDietList = async (dietId) => {
    var diets = [];
    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].dietId === dietId) {
        diets.push(recipes[i]);
      }

      setDietList(diets);
    }
  };

  const value = {
    recipes,
    cuisines,
    cuisinesList,
    difficulties,
    difficultiesList,
    diets,
    dietList,
    setRecipes,
    setCuisines,
    setCuisinesList,
    setDifficulties,
    setDifficultiesList,
    setDiets,
    setDietList,
    getRecipes,
    getCuisines,
    getDifficulties,
    getDiets,
    getDietList,
    getCuisinesList,
    getDifficultiesList,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataContextProvider;
