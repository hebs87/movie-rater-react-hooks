const TOKEN = process.env.REACT_APP_TOKEN
const URL = process.env.REACT_APP_URL

// Create an API class that we can call wherever we want to use our API service (GET/POST)
export default class API {
  // Create static methods in which we return the relevant API calls
  static loadMovieList() {
    return fetch(`${URL}api/movies/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${TOKEN}`
        }
      }
    )
      .then(res => res.json())
  }

  static loadMovie(movieId) {
    return fetch(`${URL}api/movies/${movieId}/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${TOKEN}`
        }
      }
    )
      .then(res => res.json())
  }

  static rateMovie(movieId, body) {
    return fetch(`${URL}api/movies/${movieId}/rate_movie/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${TOKEN}`
        },
        body: JSON.stringify(body)
      }
    )
  }

  static updateMovie(movieId, body) {
    return fetch(`${URL}api/movies/${movieId}/`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${TOKEN}`
        },
        body: JSON.stringify(body)
      }
    )
      .then(res => res.json())
  }
}
