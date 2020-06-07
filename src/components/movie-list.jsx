import React from "react";
import {useCookies} from 'react-cookie';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import API from "../services/api-service";

const MovieList = (props) => {

  const [token] = useCookies(['token']);

  // A function to call the movieClicked function from App and pass in the movie on click of the title
  const movieClicked = movie => event => {
    props.movieClicked(movie);
  }

  // A function to call the editClicked function from App and pass in the movie on click of the edit icon
  // This loads the movie form
  const editClicked = movie => {
    props.editClicked(movie);
  }

  // A function to call the deleteMovie API method to delete the movie from the database, then call the deleteClicked
  // function from App and pass in the movie on click of the delete icon
  const deleteClicked = movie => {
    API.deleteMovie(movie.id, token.token)
      .then(() => props.deleteClicked(movie))
      .catch(error => console.log(error));
  }

  return (
    <div>
      {
        props.movies &&
        props.movies.map(movie => (
          <div key={movie.id} className='movie-item'>
            <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
            <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(movie)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteClicked(movie)}/>
          </div>
        ))}
    </div>
  )
}

export default MovieList;
