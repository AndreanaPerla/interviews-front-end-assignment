import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/DataContext";

import React, { useContext, useEffect, useState } from "react";

function Category() {
  const { diets, cuisines, difficulties } = useContext(DataContext);

  return (
    <div>
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
    </div>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  mergin: 2rem 0;
`;
const SLink = styled(NavLink)`
  border-radius: 3rem;
  margin-right: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  padding: 0.5rem 1.5rem;
  color: white;
  cursor: pointer;

  h4 {
    margin: 0;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

export default Category;
