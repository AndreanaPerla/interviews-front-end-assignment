import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import DetailWrapper from "../utils/DetailWrapper";
import DetailTitle from "../utils/DetailTitle";
import DetailInfo from "../utils/DetailInfo";
import Wrapper from "../utils/Wrapper";
import { DataContext } from "../context/DataContext";

function Recipe() {
  const { details, getDetails } = useContext(DataContext);
  let params = useParams();

  useEffect(() => {
    getDetails(params.id);
  }, [params.id]);

  return (
    <Wrapper>
      <h2>{details.name}</h2>
      <DetailWrapper>
        <div>
          <img src={details.image} alt={details.name} />
        </div>
        <div>
          <DetailInfo>
            <DetailTitle>Ingredients</DetailTitle>
            <ul>
              {details.ingredients?.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
          </DetailInfo>
          <DetailInfo>
            <DetailTitle>Instructions</DetailTitle>
            <p>{details.instructions}</p>
          </DetailInfo>
        </div>
      </DetailWrapper>
    </Wrapper>
  );
}

export default Recipe;
