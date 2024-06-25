import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SLink = styled(NavLink)`
  margin-right: 1rem;
  text-decoration: none;
  padding: 0.5rem 0rem;
  color: #494949;
  cursor: pointer;

  h4 {
    margin: 0;
  }

  &.active {
    background: -webkit-linear-gradient(#f27121, #e94057);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default SLink;
