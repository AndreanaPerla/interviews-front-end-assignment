import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../context/DataContext";
import { useParams, useLocation } from "react-router-dom";

function Searched() {
  const { searched, getSearched } = useContext(DataContext);
  const params = useParams();

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searched.map((item) => {
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
  margin: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  min-height: 15rem;
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
    font-size: 18px;
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

export default Searched;
