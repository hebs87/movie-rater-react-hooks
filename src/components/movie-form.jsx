import React from "react";

const MovieForm = (props) => {

  const {movie} = props;

  return (
    <div>
      {
        movie &&
        <h2>{movie.title}</h2>
      }
    </div>
  )
}

export default MovieForm;
