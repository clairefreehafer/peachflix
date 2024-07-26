import { useState } from "react";
import MagnifyingGlass from "../images/magnifying-glass.svg";
import "./search.css";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const results = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchQuery}`
      );
      const resultsJson = await results.json();

      console.log(resultsJson);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <img src={MagnifyingGlass} alt="" className="magnifying-glass" />
      <input
        type="search"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search"
      />
    </form>
  );
}
