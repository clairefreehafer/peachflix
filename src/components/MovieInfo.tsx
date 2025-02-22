import { useEffect, useRef, useState } from "react";
import StarFilled from "../images/star-full.svg";
import StarEmpty from "../images/star-empty.svg";
import Button from "./Button";
import "./MovieInfo.css";
import { FAVORITES_LOCAL_STORAGE_KEY } from "../utils/variables";
import { MovieData } from "../utils/types";
import Loading from "./Loading";

type Props = {
  imdbID: string;
};

export default function MovieInfo({ imdbID }: Props) {
  const [movieData, setMovieData] = useState<MovieData>();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (imdbID.length > 0) {
      dialogRef.current?.showModal();
      setIsLoading(true);

      fetch(
        `https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbID}`
      )
        .then((result) => result.json())
        .then((json) => {
          if (json.Response === "False") {
            throw new Error(json.Error);
          }
          setMovieData(json);
          setIsLoading(false);
        })
        .catch((e) => {
          setError(e.message);
          console.error(e);
        });
    }
  }, [imdbID]);

  function handleModalClose() {
    dialogRef.current?.close();
    setMovieData(undefined);
  }

  function handleFavorite(movieInfo: MovieData | undefined) {
    const favoritesString =
      localStorage.getItem(FAVORITES_LOCAL_STORAGE_KEY) || "[]";
    const favoritesArray = JSON.parse(favoritesString);

    favoritesArray.push(movieInfo);

    localStorage.setItem(
      FAVORITES_LOCAL_STORAGE_KEY,
      JSON.stringify(favoritesArray)
    );
  }

  return (
    <dialog ref={dialogRef} className="movie-info">
      <div className="interior">
        <button onClick={handleModalClose} className="close-button">
          x
        </button>

        {error && <>❌ ERROR: {error}</>}

        {!error && isLoading && <Loading />}

        {!error && !isLoading && (
          <>
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
              <Button
                variant="primary"
                type="button"
                style={{ marginRight: 16 }}
              >
                Start watching
              </Button>
              <Button
                onClick={() => handleFavorite(movieData)}
                variant="secondary"
                type="button"
                icon
              >
                Add to favorites
              </Button>
            </div>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Cast:</strong> {movieData?.Actors}
            </p>
            <p>
              <strong>Genre:</strong> {movieData?.Genre}
            </p>
          </>
        )}
      </div>
    </dialog>
  );
}
