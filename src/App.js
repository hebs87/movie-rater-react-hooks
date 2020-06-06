import React, {useState, useEffect} from 'react';
import MovieList from "./components/movie-list";
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch data using useEffect hook and specify dependency for triggering it - empty array ensure it acts like
  // componentDidMount() lifecycle method
  useEffect(()=> {
    fetch(`${process.env.REACT_APP_URL}api/movies/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${process.env.REACT_APP_TOKEN}`
        }
      }
    )
      .then(res => res.json())
      // Call the setMovies hook and set the value to the API movies data
      .then(res => setMovies(res))
      .catch(error => console.log(error))
  }, [])

  const movieClicked = movie => {
    setSelectedMovie(movie);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
          <MovieList movies={movies} movieClicked={movieClicked}/>
          <div>Movie Details</div>
      </div>
    </div>
  );
}

export default App;
