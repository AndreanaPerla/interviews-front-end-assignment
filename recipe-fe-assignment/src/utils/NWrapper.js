import styled from "styled-components";

const NWrapper = styled.div`
  margin: 2rem 3rem;
  display: flex;
  align-items: center;

  @media (min-width: 1700px) {
    margin: 3rem 9rem;
  }

  @media (max-width: 768px) {
    margin: 2rem 20px;
  }

  @media (max-width: 475px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default NWrapper;
