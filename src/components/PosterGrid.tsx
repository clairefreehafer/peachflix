import { useState } from "react";
import { MovieData } from "../utils/types";
import MovieInfo from "./MovieInfo";
import "./PosterGrid.css";

type Props = {
  movies: MovieData[];
};

export default function PosterGrid({ movies }: Props) {
  const [movieImdbID, setMovieImdbID] = useState("");

  return (
    <>
      <div className="poster-grid">
        {movies.map((movie) => (
          <button
            onClick={() => setMovieImdbID(movie.imdbID)}
            className="poster-button"
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              key={movie.imdbID}
              className="poster-image"
            />
          </button>
        ))}
      </div>
      <MovieInfo imdbID={movieImdbID} />
    </>
  );
}
