import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/DataContext";

import React, { useContext } from "react";

function Category() {
  const { diets } = useContext(DataContext);

  return (
    <List>
      {diets.map((item) => {
        return (
          <NavLink to={`/diets/${item.name}`}>
            <h4>{item.name}</h4>
          </NavLink>
        );
      })}
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  mergin: 2rem 0;
`;

export default Category;
