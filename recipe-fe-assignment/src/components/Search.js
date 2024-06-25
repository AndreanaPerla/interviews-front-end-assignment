import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <Form onSubmit={submitHandler}>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
      <FaSearch />
    </Form>
  );
}

const Form = styled.form`
  position: relative;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 25%;
    left: 3.75%;
    color: white;
  }
`;

export default Search;
