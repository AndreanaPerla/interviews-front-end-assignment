import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  return (
    <NWrapper>
      <NLink to={`/`}>Recipe app</NLink>
      <Search />
    </NWrapper>
  );
}

const NWrapper = styled.div`
  margin: 2rem 3rem;
  display: flex;
  align-items: center;
`;

const NLink = styled(NavLink)`
  text-decoration: none;
  color: #494949;
  font-size: 26px;
  font-weight: 700;
  padding-right: 25px;

  &:hover {
    background: -webkit-linear-gradient(#f27121, #e94057);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default Navbar;
