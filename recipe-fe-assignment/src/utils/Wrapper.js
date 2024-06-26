import styled from "styled-components";

const Wrapper = styled.div`
  margin: 3rem 3rem 6rem 3rem;

  @media (min-width: 1700px) {
    margin: 4rem 9rem 9rem 9rem;
  }

  @media (max-width: 768px) {
    margin: 2rem 20px 6rem 20px;
  }
`;

export default Wrapper;
