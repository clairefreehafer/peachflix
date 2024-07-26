import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Results from "./routes/Results";
import Favorites from "./routes/Favorites";

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
      return fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchTerm}`
      );
    },
  },
  {
    path: "favorites",
    element: <Favorites />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
