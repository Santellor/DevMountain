import { useLoaderData, Link } from "react-router-dom";

export default function YourRatingsPage() {

  

  const {ratings} = useLoaderData()

  console.log(ratings)

  const userRatings = ratings.map((el) => (
    <li key={el.ratingId}>
      <Link to={`/movies/${el.movieId}`}>{el.movie.title}</Link> : {el.score}
    </li>
  ))
  // ` Their method was much more readable, but a little longer`
  // const ratingsList = ratings.map(({ ratingId, score, movie, movieId }) => {
  //   const { title } = movie;
  
  //   return (
  //     <li key={ratingId}>
  //       <Link to={`/movies/${movieId}`}>{title}</Link>: {score}
  //     </li>
                                
  return (
    <>
      <h1>Your Ratings</h1>
      <ul>{userRatings}</ul>
      

    </>
  );
}
