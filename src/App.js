import React, {useState} from 'react';
import './App.css';

function App() {

  const [movies, setMovies] = useState(['Movie 1', 'Movie 2', 'Movie 3'])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <div>
          <h2>Movie List</h2>
          {movies.map(movie => (
            <p>{movie}</p>
          ))}
        </div>
        <div>
          <h2>Movie Details</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
