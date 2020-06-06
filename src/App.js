import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [movies, setMovies] = useState([])

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <div>
          <h2>Movie List</h2>
          {movies.map(movie => (
            <p key={movie.id}>{movie.title}</p>
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
