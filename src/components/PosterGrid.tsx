import { useState } from "react";
import { MovieData } from "../utils/types";
import MovieInfo from "./MovieInfo";

const gridStyles: React.CSSProperties = {
  display: "grid",
  gap: 8,
  gridTemplateColumns: "repeat(5, calc((100% - (4 * 8px)) / 5))",
  gridTemplateRows: "2",
  maxWidth: "100vw",
};

const posterStyles: React.CSSProperties = {
  objectFit: "cover",
  width: "100%",
  height: "100%",
};

type Props = {
  movies: MovieData[];
};

export default function PosterGrid({ movies }: Props) {
  const [movieImdbID, setMovieImdbID] = useState("");

  return (
    <>
      <div style={gridStyles}>
        {movies.map((movie) => (
          // TODO: add "N/A" placeholder (style text?)
          <button onClick={() => setMovieImdbID(movie.imdbID)}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              key={movie.imdbID}
              style={posterStyles}
            />
          </button>
        ))}
      </div>
      <MovieInfo imdbID={movieImdbID} />
    </>
  );
}
