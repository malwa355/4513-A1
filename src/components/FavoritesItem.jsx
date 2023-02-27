import React from "react";
import {Link} from "react-router-dom";


const FavoritesItem = (props) => {

    return (
        <Link to="/movieDetails">
            <img className="ml-5 w-24 inline-block" src={`https://image.tmdb.org/movie/t/p/w780/${props.movie.poster}`} alt={`Poster of the film: ${props.movie.title}`}/>
            <div className="inline-block">{props.movie.title}</div>
        </Link>
    )
}

export default FavoritesItem;