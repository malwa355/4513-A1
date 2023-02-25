import React from "react";
import {Link} from "react-router-dom";


const MovieListItem = (props) => {
    const detailsHandler = () => {
        props.changeSelectedMovie(props.movie);
    }
    return (
        <li>
            <Link className="inline-grid grid-cols-6 w-full" to="/movieDetails" onClick={detailsHandler}>
            <img className="w-24" src={`https://image.tmdb.org/movie/t/p/w780/${props.movie.poster}`} alt={`Poster of the film: ${props.movie.title}`}/><div className="col-span-2">{props.movie.title}</div><div>{props.movie.release_date.split("-")[0]}</div><div>{props.movie.ratings.average}</div><div>{props.movie.ratings.popularity}</div>
            </Link>
        </li>
    )
}

export default MovieListItem;