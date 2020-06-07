import React, {useState, useEffect} from "react";
import {useCookies} from 'react-cookie';
import API from '../services/api-service';

const MovieForm = (props) => {

  const {movie, updatedMovie, newMovie} = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [token] = useCookies(['token']);

  useEffect(() => {
    setTitle(movie.title);
    setDescription(movie.description);
  }, [movie])

  const updateClicked = () => {
    // Call the relevant API class method and pass in the required arguments
    API.updateMovie(movie.id, {title, description}, token.token)
      .then(res => updatedMovie(res))
      .catch(error => console.log(error))
  }

  const addMovie = () => {
    API.addMovie({title, description}, token.token)
      .then(res => newMovie(res))
      .catch(error => console.log(error))
  }

  return (
    <div>
      {
        movie &&
        <React.Fragment>
          <label htmlFor="title">Title</label>
          <br/>
          <input id="title" type="text" placeholder="Title" value={title}
                 onChange={event => setTitle(event.target.value)}/>
          <br/>
          <label htmlFor="description">Description</label>
          <br/>
          <textarea id="description" type="text" placeholder="Description" defaultValue={description}
                    onChange={event => setDescription(event.target.value)}></textarea>
          <br/>
          {
            movie.id &&
            <button onClick={updateClicked}>Update</button>
          }
          {
            !movie.id &&
            <button onClick={addMovie}>Add</button>
          }
        </React.Fragment>
      }
    </div>
  )
}

export default MovieForm;
