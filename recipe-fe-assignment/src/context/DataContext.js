import { createContext, useState } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const check = localStorage.getItem("recipes");
    if (check) {
      setRecipes(JSON.parse(check));
    } else {
      const api = await fetch("http://localhost:8080/recipes");
      const data = await api.json();

      localStorage.setItem("recipes", JSON.stringify(data));

      setRecipes(data);

      console.log(data);
    }
  };

  const value = {
    recipes,
    setRecipes,
    getRecipes,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataContextProvider;
