import { SearchResults } from "../types";

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
  movies: SearchResults["Search"];
};

export default function PosterGrid({ movies }: Props) {
  return (
    <div style={gridStyles}>
      {movies.map((movie) => (
        <img
          src={movie.Poster}
          alt={movie.Title}
          key={movie.imdbID}
          style={posterStyles}
        />
      ))}
    </div>
  );
}
