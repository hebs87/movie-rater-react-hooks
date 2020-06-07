import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import Authentication from "./components/authentication";

// Create a token context that will enable us to set our token value in other components (the Auth component)
export const TokenContext = createContext(null);

const Router = () => {

  // Create a token state and pass the hook into the Provider as an prop object
  const [token, setToken] = useState('')

  return (
    <React.StrictMode>
      <TokenContext.Provider value={{token, setToken}}>
        <BrowserRouter>
          <Route exact path="/" component={Authentication}/>
          <Route exact path="/movies" component={App}/>
        </BrowserRouter>
      </TokenContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Router/>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
