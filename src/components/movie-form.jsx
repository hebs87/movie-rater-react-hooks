import React, {useState} from "react";
import API from '../services/api-service';

const MovieForm = (props) => {

  const {movie} = props;
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);

  const updateClicked = () => {
    // Call the relevant API class method and pass in the required arguments
    API.updateMovie(movie.id, {title, description})
      .then(res => console.log(res))
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
          <button onClick={updateClicked}>Update</button>
        </React.Fragment>
      }
    </div>
  )
}

export default MovieForm;
