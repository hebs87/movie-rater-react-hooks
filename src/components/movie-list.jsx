import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

const MovieList = (props) => {

  // A function to call the movieClicked function from App and pass in the movie on click of the title
  const movieClicked = movie => event => {
    props.movieClicked(movie);
  }

  // A function to call the editClicked function from App and pass in the movie on click of the edit icon
  // This loads the movie form
  const editClicked = movie => {
    props.editClicked(movie);
  }

  return (
    <div>
      {
        props.movies &&
        props.movies.map(movie => (
          <div key={movie.id} className='movie-item'>
            <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
            <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(movie)}/>
            <FontAwesomeIcon icon={faTrash}/>
          </div>
        ))}
    </div>
  )
}

export default MovieList;
