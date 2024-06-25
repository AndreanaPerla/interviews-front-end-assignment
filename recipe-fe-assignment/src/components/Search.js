import React, { useState } from "react";
import Form from "../utils/Form";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);

    setInput("");
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

export default Search;
