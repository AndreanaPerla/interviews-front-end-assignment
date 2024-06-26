import styled from "styled-components";

const Categories = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 3rem;

  @media (min-width: 1700px) {
    margin: 0 9rem;
  }

  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

export default Categories;
