import React from "react";
import MovieListItem from "./MovieListItem.jsx";


const MovieList = (props) => {

    return (
        <div>
            <h1>List / Matches</h1>
            <ul className="inline-grid grid-cols-1" >
                <li className="inline-grid grid-cols-4 "><div>title</div><div>Year</div><div>Rating</div><div>Popularity</div></li>
                {props.movies.map( (m) => <MovieListItem key={m.id} movie={m}/>)}
            </ul>
        </div>
    )

}

export default MovieList;