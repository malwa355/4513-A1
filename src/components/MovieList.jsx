import React from "react";
import MovieListItem from "./MovieListItem.jsx";
import {useEffect} from "react";


const MovieList = (props) => {

    const handleSort = (e) => {
        if (e.target.textContent === "Title") {
            console.log(props.sortDirection);
            if(props.lastSorted === "title"){
                if(props.sortDirection ==="asc") {
                    props.sort("title", "dsc");
                } else if (props.sortDirection ==="dsc") {
                    props.sort("title", "asc");
                } 
            } else {
                props.sort("title", "asc");
            }
        } else if (e.target.textContent === "Year") {
            if(props.lastSorted === "year"){
                if(props.sortDirection ==="asc") {
                    props.sort("year", "dsc");
                } else if (props.sortDirection ==="dsc") {
                    props.sort("year", "asc");
                } 
            } else {
                props.sort("year", "asc");
            } 
        } else if (e.target.textContent === "Rating") {
            if(props.lastSorted === "rating"){
                if(props.sortDirection ==="asc") {
                    props.sort("rating", "dsc");
                } else if (props.sortDirection ==="dsc") {
                    props.sort("rating", "asc");
                } 
            } else {
                props.sort("rating", "asc");
            }
        } else if (e.target.textContent === "Popularity") {
            if(props.lastSorted === "popularity"){
                if(props.sortDirection ==="asc") {
                    props.sort("popularity", "dsc");
                } else if (props.sortDirection ==="dsc") {
                    props.sort("popularity", "asc");
                }
            } else {
                props.sort("popularity", "asc");
            }
        }
    }
    return (

            <div>
                <h1 className="text-center fixed bg-dk-blue w-screen h-10 mt-[80px] z-1  font-bold text-xl">Movies</h1>
                <ul className="inline-grid grid-cols-1 ml-80 mt-32" >
                    <li className="inline-grid grid-cols-7">
                        <div></div>
                        <div onClick={handleSort} className="m-auto font-bold text-xl">Title</div>
                        <div onClick={handleSort} className="m-auto font-bold text-xl">Year</div>
                        <div onClick={handleSort} className="m-auto font-bold text-xl">Rating</div>
                        <div onClick={handleSort} className="m-auto font-bold text-xl">Popularity</div>
                        <div></div>
                        <div></div>
                    </li>
                    {props.movies.map( (m) => <MovieListItem key={m.id} movie={m} changeSelectedMovie={props.changeSelectedMovie} addFavorite={props.addFavorite} />)}
                </ul>
            </div>

    )
}

export default MovieList;