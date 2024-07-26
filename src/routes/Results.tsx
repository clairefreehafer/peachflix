import { useLoaderData } from "react-router-dom";

export default function Results() {
  const movies = useLoaderData();

  console.log(movies);

  return <>Results</>;
}
