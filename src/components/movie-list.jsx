import React from "react";

const MovieList = (props) => {

  const movieClicked = movie => event => {
    props.movieClicked(movie);
  }

  return (
    <div>
      {
        props.movies &&
        props.movies.map(movie => (
          <div key={movie.id}>
            <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
          </div>
        ))}
    </div>
  )
}

export default MovieList;
