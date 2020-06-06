import React from "react";

const MovieDetails = (props) => {

  return (
    <div>
      {
        props.movie &&
        <React.Fragment>
          <h2>{props.movie.title}</h2>
          <p>{props.movie.description}</p>
        </React.Fragment>
      }
      {!props.movie && null}
    </div>
  )
}

export default MovieDetails;
