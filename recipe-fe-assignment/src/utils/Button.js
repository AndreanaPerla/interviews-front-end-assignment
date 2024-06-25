import styled from "styled-components";

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
  border-radius: 3rem;
  border: none;
  background: linear-gradient(to right, #f27121, #e94057);
  color: white;
  font-size: 18px;
  font-weight: 700;

  p {
    padding-left: 5px;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 1rem 3rem;
    border-radius: 2rem;
  }

  @media (max-width: 600px) {
    padding: 1rem 1rem;

    p {
      display: none;
    }
  }
`;

export default Button;
