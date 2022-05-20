import {  useParams} from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import Film from "../components/Film"

const MoviesDetails = () => {
    const { id } = useParams()
    const url = `https://ghibliapi.herokuapp.com/films/${id}`
    const { data : movie, isLoaded, error} = useFetch(url)


  return (
    <div>
        {isLoaded && <div>Loading ...</div>} 
        {error && <div> {error}</div>}

        {movie && (
            <Film className="my-6" title={movie.title} original_title={movie.original_title} director={movie.director} description={movie.description} src={movie.image}/>
        )}
    </div>
  )
}

export default MoviesDetails
