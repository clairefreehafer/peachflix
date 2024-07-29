import { useEffect, useRef, useState } from "react";
import StarFilled from "../images/star-full.svg";
import StarEmpty from "../images/star-empty.svg";
import Button from "./Button";
import "./MovieInfo.css";

type Props = {
  imdbID: string;
};

type MovieData = {
  Poster: string;
  Title: string;
  Plot: string;
  Runtime: string;
  Rated: string;
  Actors: string;
  Genre: string;
};

export default function MovieInfo({ imdbID }: Props) {
  const [movieData, setMovieData] = useState<MovieData>();
  const dialogRef = useRef<HTMLDialogElement>(null);

  console.log(imdbID);

  useEffect(() => {
    if (imdbID.length > 0) {
      dialogRef.current?.showModal();

      fetch(
        `https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbID}`
      )
        .then((result) => result.json())
        .then((json) => setMovieData(json))
        .catch(console.error);
    }
  }, [imdbID]);

  function handleModalClose() {
    dialogRef.current?.close();
    setMovieData(undefined);
  }

  return (
    <dialog ref={dialogRef} className="movie-info">
      <div className="interior">
        <button onClick={handleModalClose} className="close-button">
          x
        </button>

        <h1 className="title">{movieData?.Title}</h1>
        <p style={{ marginBottom: "0.5rem" }}>{movieData?.Plot}</p>
        <div className="row">
          <div className="rating">
            <img src={StarFilled} alt="" />
            <img src={StarFilled} alt="" />
            <img src={StarFilled} alt="" />
            <img src={StarFilled} alt="" />
            <img src={StarEmpty} alt="" />
          </div>
          <p>{movieData?.Runtime}</p>
          <p className="rated">{movieData?.Rated}</p>
        </div>

        <div className="row">
          <Button variant="primary" type="button" style={{ marginRight: 16 }}>
            Start watching
          </Button>
          <Button variant="secondary" type="button" icon>
            Add to favorites
          </Button>
        </div>
        <p style={{ marginTop: "0.5rem" }}>
          <strong>Cast:</strong> {movieData?.Actors}
        </p>
        <p>
          <strong>Genre:</strong> {movieData?.Genre}
        </p>
      </div>
    </dialog>
  );
}
