import React from "react";



const FavoritesItem = (props) => {

    return (
        <div className="">
            <img className="ml-5 w-24 inline-block" src={`https://image.tmdb.org/movie/t/p/w780/${props.movie.poster}`} alt={`Poster of the film: ${props.movie.title}`}/>
            <div className="inline-block">{props.movie.title}</div>
        </div>
    )

}

export default FavoritesItem;