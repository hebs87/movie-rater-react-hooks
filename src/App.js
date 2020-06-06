import React, {useState, useEffect} from 'react';
import MovieList from "./components/movie-list";
import MovieDetails from "./components/movie-details";
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

  // A function to set the selectedMovie state to the clicked movie and pass into the MovieDetails component
  const movieClicked = movie => {
    setSelectedMovie(movie);
  }

  // A function to refresh the selectedMovie state following successful user rating and pass back into MovieDetails
  const updateMovie = movie => {
    setSelectedMovie(movie)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
          <MovieList movies={movies} movieClicked={movieClicked}/>
          <MovieDetails movie={selectedMovie} updateMovie={updateMovie}/>
      </div>
    </div>
  );
}

export default App;
