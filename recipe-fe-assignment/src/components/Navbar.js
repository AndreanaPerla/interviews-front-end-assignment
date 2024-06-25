import React from "react";
import NWrapper from "../utils/NWrapper";
import NLink from "../utils/NLink";
import Search from "./Search";

function Navbar() {
  return (
    <NWrapper>
      <NLink to={`/`}>Recipe app</NLink>
      <Search />
    </NWrapper>
  );
}

export default Navbar;
