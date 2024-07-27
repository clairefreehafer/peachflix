import { useLoaderData, useSearchParams } from "react-router-dom";
import PosterGrid from "../components/PosterGrid";
import { SearchResults } from "../types";
import Pagination from "../components/Pagination";

export default function Results() {
  const results = useLoaderData() as SearchResults;
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");

  console.log(results);

  return (
    <>
      <h1>Search results for "{searchTerm}"</h1>
      <PosterGrid movies={results.Search} />
      <Pagination total={results.totalResults} />
    </>
  );
}
