import { useLoaderData } from "react-router-dom";
import Nav from "../components/Nav";
import PosterGrid from "../components/PosterGrid";
import { MovieData } from "../utils/types";

export default function Favorites() {
  const favorites = useLoaderData() as MovieData[];

  return (
    <>
      <Nav />
      <PosterGrid movies={favorites} />
    </>
  );
}
