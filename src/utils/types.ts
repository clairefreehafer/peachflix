export type MovieData = Record<string, string>;

export type SearchResults = {
  Response: "True" | "False";
  Search: MovieData[];
  totalResults: string;
};
