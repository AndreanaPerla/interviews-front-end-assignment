import React, { useEffect, useContext } from "react";
import Grid from "../utils/Grid";
import Card from "../utils/Card";
import Gradient from "../utils/Gradient";
import { DataContext } from "../context/DataContext";
import { useParams, useLocation } from "react-router-dom";
import Wrapper from "../utils/Wrapper";

function Searched() {
  const { searched, getSearched } = useContext(DataContext);
  const params = useParams();

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Searched;
