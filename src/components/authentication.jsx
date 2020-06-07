import React, {useState, useEffect} from "react";
import API from "../services/api-service";
import {useCookies} from 'react-cookie';

const Authentication = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginView, setIsLoginView] = useState(true);

  // Destructure the token and setToken hook props from the Context Provider in index.js
  const [token, setToken] = useCookies(['token'])

  // Route the user to the /movies route when logged in
  useEffect(() => {
    if (token.token) {
      window.location.href = '/movies';
    }
  }, [token]);

  const login = () => (
    API.loginUser({username, password})
      // Call the setToken hook and pass in the token value, only if a token is returned following successful login
      .then(res => res.token ? setToken('token', res.token) : null)
      .catch(error => console.log(error))
  )

  const register = () => (
    API.registerUser({username, password})
      // Call the setToken hook and pass in the token value, only if a token is returned following successful login
      .then(() => login())
      .catch(error => console.log(error))
  )

  return (
    <React.Fragment>
      {
        isLoginView &&
        <h1>Login</h1>
      }
      {
        !isLoginView &&
        <h1>Register</h1>
      }
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
      {
        isLoginView &&
        <React.Fragment>
          <button onClick={login}>Login</button>
          <p>Don't have an account?
            <span className="register-link" onClick={() => setIsLoginView(false)}> Register here</span>
          </p>
        </React.Fragment>
      }
      {
        !isLoginView &&
        <React.Fragment>
          <button onClick={register}>Register</button>
          <p>Already have an account?
            <span className="register-link" onClick={() => setIsLoginView(true)}> Login</span>
          </p>
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default Authentication;
