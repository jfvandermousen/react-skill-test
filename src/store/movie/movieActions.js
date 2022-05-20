import axios from 'axios'
import { FETCH_MOVIES_REQUEST,FETCH_MOVIES_SUCCESS,FETCH_MOVIES_FAILURE} from './movieTypes'

export const fetchMovies = () => {

  return (dispatch) => {
      
    dispatch(fetchMoviesRequest())
    axios
      .get('https://ghibliapi.herokuapp.com/films')
      .then(response => {
        const movies = response.data
        dispatch(fetchMoviesSuccess(movies))
      })
      .catch(error => {
        dispatch(fetchMoviesFailure(error.message))
      })
  }
}

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST
  }
}

export const fetchMoviesSuccess = movies => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies
  }
}

export const fetchMoviesFailure = error => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error
  }
}