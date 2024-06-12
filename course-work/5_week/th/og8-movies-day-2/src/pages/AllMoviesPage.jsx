import { useLoaderData, Link } from "react-router-dom";


export default function AllMoviesPage() {

  const {movies} = useLoaderData()

  const movieListItems = movies.map((el) => (
    <li key={el.movieId}>
      <Link to={`/movies/${el.movieId}`}>{el.title}</Link>
    </li>
  ))
  return (
    <>
      <h1>All Movies</h1>
      {movieListItems}
    </>
  );
}
