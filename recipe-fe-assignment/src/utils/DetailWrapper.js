import styled from "styled-components";

const DetailWrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;

  h2 {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }

  ul {
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    max-height: 25rem;
    object-fit: cover;
    border-radius: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    img {
      max-height: 20rem;
    }
  }
`;

export default DetailWrapper;
