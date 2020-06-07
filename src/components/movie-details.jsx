import React, {useState} from "react";
import {useCookies} from 'react-cookie';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import API from "../services/api-service";

const MovieDetails = (props) => {

  const {movie, updateMovie} = props;
  const [highlighted, setHighlighted] = useState(-1)
  const [token] = useCookies(['token']);

  // Function to highlight the number of stars up to where the user hovers
  const highlightedRating = highlightedVal => event => {
    setHighlighted(highlightedVal)
  }

  // Function to submit the user's rating on click
  const rateClicked = rating => event => {
    API.rateMovie(movie.id, {stars: rating}, token.token)
      .then(() => getDetails())
      .catch(error => console.log(error))
  }

  // Function to get refresh the movie details following successful user rating
  const getDetails =  () => {
    API.loadMovie(movie.id, token.token)
      .then(res => updateMovie(res))
      .catch(error => console.log(error))
  }

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
          <div className="rate-container">
            <h2>Rate It</h2>
            {
              [...Array(5)].map((e, i) => {
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={highlighted > i -1 ? 'purple' : ''}
                    onMouseEnter={highlightedRating(i)}
                    onMouseLeave={highlightedRating(-1)}
                    onClick={rateClicked(i+1)}
                  />
                )
              })
            }
          </div>
        </React.Fragment>
      }
      {!movie && null}
    </div>
  )
}

export default MovieDetails;
