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
