import { useLoaderData } from "react-router-dom";
import PosterGrid from "../components/PosterGrid";
import { SearchResults } from "../types";

export default function Results() {
  const results = useLoaderData() as SearchResults;
  const url = new URL(window.location.href);
  const searchTerm = url.searchParams.get("q");

  console.log(results);

  return (
    <>
      <h1>Search results for "{searchTerm}"</h1>
      <PosterGrid movies={results.Search} />
    </>
  );
}
