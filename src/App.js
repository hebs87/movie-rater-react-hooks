import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import API from './services/api-service';
import MovieList from "./components/movie-list";
import MovieDetails from "./components/movie-details";
import MovieForm from "./components/movie-form";
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);
  const [token] = useCookies(['token']);

  // Fetch data using useEffect hook and specify dependency for triggering it - empty array ensure it acts like
  // componentDidMount() lifecycle method
  useEffect(() => {
    // Call the relevant method on the API service to load the movie list
    API.loadMovieList(token.token)
      // Call the setMovies hook and set the value to the API movies data
      .then(res => setMovies(res))
      .catch(error => console.log(error))
  }, []);

  // Route the user to the login page route if no token is present
  useEffect(() => {
    if (!token.token) {
      window.location.href = '/';
    }
  }, [token]);

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

  // A function to update the edited movie in the displayed list when a user updates it
  const updatedMovie = movie => {
    const newMovies = movies.map(mov => {
      // Return the edited movie if the IDs match or return the existing movie
      if (mov.id === movie.id) {
        return movie;
      }
      return mov;
    });
    setMovies(newMovies);
    setEditedMovie(null);
    setSelectedMovie(movie);
  }

  // A function to render a blank movie form when the Add Movie button is clicked
  const addMovie = () => {
    setEditedMovie({title: '', description: ''});
    setSelectedMovie(null);
  }

  // A function to render the updated movie list when the user adds a new movie
  const newMovie = movie => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
    setEditedMovie(null);
    setSelectedMovie(movie);
  }

  // A function to refresh the movies list and remove the deleted movie from it
  const deleteClicked = movie => {
    const newMovies = movies.filter(mov => mov.id !== movie.id);
    setMovies(newMovies);
    setSelectedMovie(null);
    setEditedMovie(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        {
          movies &&
          <div>
            <MovieList
              movies={movies}
              movieClicked={loadMovie}
              editClicked={editClicked}
              deleteClicked={deleteClicked}
            />
            <button onClick={addMovie}>Add Movie</button>
          </div>
        }
        {!movies && null}
        {
          selectedMovie &&
          <MovieDetails
            movie={selectedMovie}
            updateMovie={loadMovie}
          />
        }
        {!selectedMovie && null}
        {
          editedMovie &&
          <MovieForm
            movie={editedMovie}
            updatedMovie={updatedMovie}
            newMovie={newMovie}
          />
        }
        {!editedMovie && null}
      </div>
    </div>
  );
}

export default App;
