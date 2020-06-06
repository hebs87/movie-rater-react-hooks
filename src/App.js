import React, {useState, useEffect} from 'react';
import MovieList from "./components/movie-list";
import MovieDetails from "./components/movie-details";
import MovieForm from "./components/movie-form";
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

  // Fetch data using useEffect hook and specify dependency for triggering it - empty array ensure it acts like
  // componentDidMount() lifecycle method
  useEffect(() => {
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

  // A function to load the movie details that the user clicks, or refresh the movie details when the user rates
  // the movie
  const loadMovie = movie => {
    setSelectedMovie(movie);
    setEditedMovie(null);
  }

  // A function to set the edited movie to the movie that the user clicks and display the edit form
  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        {
          movies &&
          <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked}/>
        }
        {!movies && null}
        {
          selectedMovie &&
          <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
        }
        {!selectedMovie && null}
        {
          editedMovie &&
          <MovieForm movie={editedMovie}/>
        }
        {!editedMovie && null}
      </div>
    </div>
  );
}

export default App;
