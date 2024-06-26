import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import DetailWrapper from "../utils/DetailWrapper";
import DetailTitle from "../utils/DetailTitle";
import DetailInfo from "../utils/DetailInfo";
import Wrapper from "../utils/Wrapper";
import { DataContext } from "../context/DataContext";
import { motion } from "framer-motion";

function Recipe() {
  const { details, getDetails } = useContext(DataContext);
  let params = useParams();

  useEffect(() => {
    getDetails(params.id);
  }, [params.id]);

  return (
    <Wrapper>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
    </Wrapper>
  );
}

export default Recipe;
