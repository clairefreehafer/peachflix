import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Results from "./routes/Results";
import Favorites from "./routes/Favorites";
import { FAVORITES_LOCAL_STORAGE_KEY } from "./utils/variables";
import ErrorBoundary from "./components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "results",
    element: <Results />,
    loader: async ({ request }) => {
      const url = new URL(request.url);
      const searchTerm = url.searchParams.get("q");
      const page = url.searchParams.get("p");
      const results = await fetch(
        `https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}&type=movie&page=${page}`
      );
      const json = await results.json();

      if (json.Response === "False") {
        throw new Error(json.Error);
      }
      return json;
    },
    errorElement: <ErrorBoundary />,
  },
  {
    path: "favorites",
    element: <Favorites />,
    loader: () => {
      const favorites =
        localStorage.getItem(FAVORITES_LOCAL_STORAGE_KEY) || "[]";
      return JSON.parse(favorites);
    },
    errorElement: <ErrorBoundary />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
