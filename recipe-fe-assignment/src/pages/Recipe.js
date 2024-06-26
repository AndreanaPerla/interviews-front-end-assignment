import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
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
        <Info>
          <img src={details.image} alt={details.name} />
        </Info>
        <Info>
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
        </Info>
      </DetailWrapper>
    </Wrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;

  h2 {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }

  ul {
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    max-height: 25rem;
    object-fit: cover;
    border-radius: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    img {
      max-height: 20rem;
    }
  }
`;

const DetailTitle = styled.h3`
  text-align: center;
  margin: 0;
  width: 50%;
  padding: 1rem;
  color: #494949;
  background: white;
  border: 2px solid #494949;
  font-size: 18px;
  font-weight: 600;
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    line-height: 1.5rem;
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default Recipe;
