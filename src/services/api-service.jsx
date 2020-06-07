const URL = process.env.REACT_APP_URL

// Create an API class that we can call wherever we want to use our API service (GET/POST)
export default class API {
  // Create static methods in which we return the relevant API calls
  static loginUser(body) {
    return fetch(`${URL}auth/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }
    )
      .then(res => res.json())
  }

  static registerUser(body) {
    return fetch(`${URL}api/users/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }
    )
      .then(res => res.json())
  }

  static loadMovieList(token) {
    return fetch(`${URL}api/movies/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      }
    )
      .then(res => res.json())
  }

  static loadMovie(movieId, token) {
    return fetch(`${URL}api/movies/${movieId}/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      }
    )
      .then(res => res.json())
  }

  static rateMovie(movieId, body, token) {
    return fetch(`${URL}api/movies/${movieId}/rate_movie/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify(body)
      }
    )
  }

  static updateMovie(movieId, body, token) {
    return fetch(`${URL}api/movies/${movieId}/`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify(body)
      }
    )
      .then(res => res.json())
  }

  static addMovie(body, token) {
    return fetch(`${URL}api/movies/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify(body)
      }
    )
      .then(res => res.json())
  }

  static deleteMovie(movieId, token) {
    return fetch(`${URL}api/movies/${movieId}/`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      }
    )
  }
}
