import MovieResult from "./MovieResult"
import { selectMovies } from "../reducers/search/searchSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const MoviePage = () => {
    let { movieID } = useParams();
    const results = useSelector(selectMovies)
    const result = results.find(result=> 
        result.id ===  parseInt(movieID)
    )
  
    console.log(typeof movieID)
    console.log(result);

    return (
        <MovieResult className='single-movie' title={result.title} desc={result.overview} release={result.release_date} image={result.poster_path}/>
    )
}

export default MoviePage
