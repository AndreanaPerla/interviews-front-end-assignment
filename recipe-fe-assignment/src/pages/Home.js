import Recipes from "../components/Recipes";
import styled from "styled-components";

import React from "react";

function Home() {
  return (
    <Wrapper>
      <Recipes />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 3rem;
`;

export default Home;
