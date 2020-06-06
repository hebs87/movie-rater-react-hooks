const TOKEN = process.env.REACT_APP_TOKEN
const URL = process.env.REACT_APP_URL

// Create an API class that we can call wherever we want to use our API service (GET/POST)
export default class API {
  // Create a static function in which we return the API calls
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
