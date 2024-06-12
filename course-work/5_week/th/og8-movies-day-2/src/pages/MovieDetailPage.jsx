import { useLoaderData, useNavigate } from "react-router-dom";
import CreateRatingForm from '../components/CreateRatingForm.jsx'
import axios from "axios";


export default function MovieDetailPage() {
  const navigate =useNavigate()
  const {movie} = useLoaderData()

  const handleCreateRating = async (e, {score}) => {
    e.preventDefault()

    const res = await axios.post('/api/ratings', {score: score, movieId: movie.movieId})
    console.log(res.data)
        res.data? navigate('/me') : null
    
  }

  return (
    <>
      <h1>{movie.title}</h1>
      <img src={movie.posterPath} alt={movie.title} style={{width: '200px'}}/>
      <p>{movie.overview}</p>
      <h2>Rate {movie.title}</h2>
      <CreateRatingForm onCreateRating={handleCreateRating}/>
    </>
  );
}
