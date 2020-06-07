import React, {useState, useContext, useEffect} from "react";
import API from "../services/api-service";
import {TokenContext} from '../index';

const Authentication = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Destructure the token and setToken hook props from the Context Provider in index.js
  const {token, setToken} = useContext(TokenContext)

  // Route the user to the /movies route when logged in
  useEffect(() => {
    if (token) {
      window.location.href = '/movies';
    }
  }, [token]);

  const login = () => (
    API.loginUser({username, password})
      // Call the setToken hook and pass in the token value
      .then(res => setToken(res.token))
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
