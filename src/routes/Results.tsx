import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import PosterGrid from "../components/PosterGrid";
import { SearchResults } from "../utils/types";
import Pagination from "../components/Pagination";
import Nav from "../components/Nav";
import Loading from "../components/Loading";

export default function Results() {
  const results = useLoaderData() as SearchResults;
  const { state } = useNavigation();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");

  return (
    <div>
      <Nav />
      {state === "loading" ? (
        <Loading />
      ) : (
        <>
          <h1 style={{ margin: "1rem" }}>Search results for "{searchTerm}"</h1>
          <PosterGrid movies={results.Search} />
          <Pagination total={results.totalResults} />
        </>
      )}
    </div>
  );
}
