import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NLink = styled(NavLink)`
  text-decoration: none;
  color: #494949;
  font-size: 26px;
  font-weight: 700;
  margin-right: 25px;
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  background: linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#f27121, #e94057) border-box;
  border: 3px solid transparent;

  &:hover {
    background: -webkit-linear-gradient(#f27121, #e94057);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 475px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export default NLink;
