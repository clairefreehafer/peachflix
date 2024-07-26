export type SearchResults = {
  Response: "True" | "False";
  Search: {
    Poster: string;
    Title: string;
    Type: "movie" | "series" | "episode";
    Year: string;
    imdbID: string;
  }[];
  totalResults: string;
};
