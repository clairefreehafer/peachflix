import { useLoaderData, useSearchParams } from "react-router-dom";
import PosterGrid from "../components/PosterGrid";
import { SearchResults } from "../utils/types";
import Pagination from "../components/Pagination";
import Nav from "../components/Nav";

export default function Results() {
  const results = useLoaderData() as SearchResults;
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");

  console.log(results);

  return (
    <>
      <Nav />
      <h1>Search results for "{searchTerm}"</h1>
      <PosterGrid movies={results.Search} />
      <Pagination total={results.totalResults} />
    </>
  );
}
