import { useState } from "react";
import { Form } from "react-router-dom";
import MagnifyingGlass from "../images/magnifying-glass.svg";
import "./Search.css";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Form action="/results" className="search-container">
      <img src={MagnifyingGlass} alt="" className="magnifying-glass" />
      <input
        type="search"
        placeholder="Search"
        name="q"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search"
      />
    </Form>
  );
}
