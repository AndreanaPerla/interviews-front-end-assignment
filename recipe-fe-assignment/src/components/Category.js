import styled from "styled-components";
import { FaArrowUpRightDots, FaBowlFood } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/DataContext";

import React, { useContext, useEffect, useState } from "react";

function Category() {
  const { diets, cuisines, difficulties } = useContext(DataContext);
  const [openDiets, setOpenDiets] = useState(false);
  const [openCousines, setOpenCousines] = useState(false);
  const [openDifficulty, setOpenDifficulty] = useState(false);

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

const Categories = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 3rem;
`;

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1.5rem 5rem;
  border-radius: 3rem;
  border: none;
  background: linear-gradient(to right, #f27121, #e94057);
  color: white;
  font-size: 18px;
  font-weight: 700;

  p {
    padding-left: 5px;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 1rem 3rem;
    border-radius: 2rem;
  }

  @media (max-width: 600px) {
    padding: 1rem 1rem;

    p {
      display: none;
    }
  }
`;

const List = styled.div`
  z-index: 20;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const SLink = styled(NavLink)`
  // border-radius: 2rem;
  margin-right: 1rem;
  text-decoration: none;
  // background: linear-gradient(35deg, #494949, #313131);
  padding: 0.5rem 0rem;
  color: #494949;
  cursor: pointer;

  h4 {
    margin: 0;
  }

  &.active {
    background: -webkit-linear-gradient(#f27121, #e94057);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    // color: linear-gradient(to right, #f27121, #e94057);
  }
`;

export default Category;
