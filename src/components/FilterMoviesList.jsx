import { useState } from "react"
import Film from "./Film"
import { useFetch }  from '../hooks/useFetch'
import { Link } from "react-router-dom";

const FilterMoviesList = () => {
    const [url,setUrl] = useState('https://ghibliapi.herokuapp.com/films');
    const [query, setQuery] = useState("");
    const [searchParam] = useState(["title", "director"]);
    const { data : movies,isLoaded, error } = useFetch(url)


    // Search Filter for movies

    function search(movies) {
        return  movies.filter((movie) => {
            return searchParam.some((newMovie) => {
                return (
                    movie[newMovie]
                        .toString()
                        .toLowerCase()
                        .indexOf(query.toLowerCase()) > -1
                );
            });
        });
    }
        return (
            <div>
                <div className="search-wrapper w-full p-2 mb-8 ">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"                                
                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                placeholder="Search Movies by title or director"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </label>
                    </div>

                    
                {isLoaded && <div>Loading ...</div>} 
                {error && <div> {error}</div>}


                <div className="ml-5 grid gap-4 grid-cols-2 md:grid-cols-4">


                {search(movies).map((movie) => {
                    return (
                        <div className="" key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                <Film className="my-6 hover:cursor-pointer hover:opacity-80 " src={movie.image}/>
                            </Link>
                        </div>
                    )
                })}
                </div>
            
            </div>
        )
        }

export default FilterMoviesList;
