import React, {useState} from "react";
import API from "../services/api-service";

const Authentication = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => (
    API.loginUser({username, password})
      .then(res => console.log(res.token))
      .catch(error => console.log(error))
  )

  return (
    <React.Fragment>
      <label htmlFor="username">Username</label>
      <br/>
      <input id="username" type="text" placeholder="Username" value={username}
             onChange={event => setUsername(event.target.value)}/>
      <br/>
      <label htmlFor="password">Password</label>
      <br/>
      <input id="password" type="password" placeholder="Password" defaultValue={password}
             onChange={event => setPassword(event.target.value)}/>
      <br/>
      <button onClick={login}>Update</button>
    </React.Fragment>
  )
}

export default Authentication;
