import { useEffect, useState } from "react";
import { Form, useSearchParams } from "react-router-dom";
import MagnifyingGlass from "../images/magnifying-glass.svg";
import "./Search.css";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const queryFromParams = searchParams.get("q");

    if (!queryFromParams) return;

    // Fill the search bar on "/results" with our query from "/"
    if (searchQuery.length === 0 && queryFromParams.length > 0) {
      setSearchQuery(queryFromParams);
    }
  }, []);

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
      <input type="hidden" value="1" name="p" />
    </Form>
  );
}
