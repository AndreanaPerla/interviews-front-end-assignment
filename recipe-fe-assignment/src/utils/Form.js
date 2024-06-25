import styled from "styled-components";

const Form = styled.form`
  position: relative;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 2rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 32%;
    left: 6.25%;
    color: white;
  }

  @media (max-width: 768px) {
    width: calc(100% - 257px);
  }

  @media (max-width: 475px) {
    width: calc(100% - 80px);
  }
`;

export default Form;
