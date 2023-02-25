import React from "react";



const MovieListItem = (props) => {

    return (
        <li className="inline-grid grid-cols-4 ">
            <div>{props.movie.title}</div><div>{props.movie.release_date}</div><div>{props.movie.ratings.average}</div><div>{props.movie.ratings.popularity}</div>
        </li>
    )

}

export default MovieListItem;