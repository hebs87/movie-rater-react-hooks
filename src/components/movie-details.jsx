import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const MovieDetails = (props) => {

  const {movie} = props;

  return (
    <div>
      {
        props.movie &&
        <React.Fragment>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 0 ? 'orange': ''}/>
          <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 1 ? 'orange' : ''}/>
          <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 2 ? 'orange': ''}/>
          <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 3 ? 'orange': ''}/>
          <FontAwesomeIcon icon={faStar} className={movie.avg_rating > 4 ? 'orange': ''}/>
          <span>({movie.no_of_ratings})</span>
        </React.Fragment>
      }
      {!movie && null}
    </div>
  )
}

export default MovieDetails;
