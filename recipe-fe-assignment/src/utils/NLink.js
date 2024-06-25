import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

export default NLink;
