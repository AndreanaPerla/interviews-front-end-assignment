import Categories from "../utils/Categories";
import Button from "../utils/Button";
import List from "../utils/List";
import SLink from "../utils/SLink";
import { FaArrowUpRightDots, FaBowlFood } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { DataContext } from "../context/DataContext";

import React, { useContext } from "react";

function Category() {
  const {
    diets,
    cuisines,
    difficulties,
    openDiets,
    setOpenDiets,
    openCousines,
    setOpenCousines,
    openDifficulty,
    setOpenDifficulty,
  } = useContext(DataContext);

  return (
    <Categories>
      <div>
        <Button onClick={() => setOpenDiets(!openDiets)}>
          <FaBowlFood size={18} />
          <p>Diets</p>
        </Button>
        {openDiets && (
          <List>
            {diets.map((item) => {
              return (
                <SLink
                  onClick={() => setOpenDiets(!openDiets)}
                  key={item.name}
                  to={`/diets/${item.name}`}
                  state={`${item.id}`}
                >
                  <h4>{item.name}</h4>
                </SLink>
              );
            })}
          </List>
        )}
      </div>
      <div>
        <Button onClick={() => setOpenCousines(!openCousines)}>
          <BiWorld size={20} />
          <p>Cousines</p>
        </Button>
        {openCousines && (
          <List>
            {cuisines.map((item) => {
              return (
                <SLink
                  onClick={() => setOpenCousines(!openCousines)}
                  key={item.name}
                  to={`/cuisines/${item.name}`}
                  state={`${item.id}`}
                >
                  <h4>{item.name}</h4>
                </SLink>
              );
            })}
          </List>
        )}
      </div>
      <div>
        <Button onClick={() => setOpenDifficulty(!openDifficulty)}>
          <FaArrowUpRightDots size={18} /> <p>Difficulty</p>
        </Button>
        {openDifficulty && (
          <List>
            {difficulties.map((item) => {
              return (
                <SLink
                  onClick={() => setOpenDifficulty(!openDifficulty)}
                  key={item.name}
                  to={`/difficulties/${item.name}`}
                  state={`${item.id}`}
                >
                  <h4>{item.name}</h4>
                </SLink>
              );
            })}
          </List>
        )}
      </div>
    </Categories>
  );
}

export default Category;
