import { useState } from "react";

export default function MovieList(props) {
const [inputValue, setInputValue] = useState('');

const [movies, setMovies] = useState(['LOTR', `EEAaO`]);

const movieList = movies.map((movie) => <h5 key={movie}>{movie}</h5>)

const addMovie = () => {
    setMovies([...movies, inputValue])
    setInputValue('')
}

return (
<div>
  <h2>MOVIES</h2>
    {movieList}

  <input 
    value={inputValue} 
    onChange={(evt) => setInputValue(evt.target.value)} 
    type="text"
  />

  <button 
  style={{ marginLeft: "10px" }}
  onClick={addMovie}> Add Movie </button>
</div>
);
}