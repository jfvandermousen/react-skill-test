import React, { useEffect , useState} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMovies } from '../store/movie'
import Film from './Film'

function Movies ({ movieData, fetchMovies}) {

  useEffect(() => {
    fetchMovies()
  }, [])

  return movieData.loading ? (<h2>Loading</h2>) : movieData.error ? ( <h2>{movieData.error}</h2>) : (

    <div>
      <div className="ml-5 grid gap-4 grid-cols-2 md:grid-cols-4">
        {movieData &&
          movieData.movies &&
          movieData.movies.map(movie =>{
                    return (
                        <div className="" key={movie.id}>
                            <Link  to={`/movies/${movie.id}`}>
                                <Film className="my-6 hover:cursor-pointer hover:opacity-80 " src={movie.image}/>
                            </Link>
                        </div>
                    )
                })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    movieData: state.movie
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies)