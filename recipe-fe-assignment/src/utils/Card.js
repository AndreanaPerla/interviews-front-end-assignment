import styled from "styled-components";

const Card = styled.div`
  min-height: 15rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a {
    text-decoration: none;
  }
  h4 {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Card;
