import React, {useState} from "react";

const MovieForm = (props) => {

  const {movie} = props;
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);

  const updateClicked = () => {
    console.log(title, description);
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
