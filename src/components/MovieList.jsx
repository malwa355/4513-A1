import React from "react";
import MovieListItem from "./MovieListItem.jsx";


const MovieList = (props) => {

    return (

            <div>
                <h1 className="text-center">List / Matches</h1>
                <ul className="inline-grid grid-cols-1 ml-96" >
                    <li className="inline-grid grid-cols-7 ">
                        <div></div>
                        <div className="m-auto">title</div>
                        <div className="m-auto">Year</div>
                        <div className="m-auto">Rating</div>
                        <div className="m-auto">Popularity</div>
                        <div></div>
                        <div></div>
                    </li>
                    {props.movies.map( (m) => <MovieListItem key={m.id} movie={m} changeSelectedMovie={props.changeSelectedMovie} addFavorite={props.addFavorite}/>)}
                </ul>
            </div>

    )
}

export default MovieList;