import React from "react";
import Rater from "./Rater.jsx";
import Stars from "./Stars.jsx";

const Rating = (props) => {
    return (
        <div>
            <p>Current Interest: {props.movie.ratings.popularity.toFixed(2)}</p>
            <p>Current Average Rating: {props.movie.ratings.average}</p> <Stars input={props.movie.ratings.average}></Stars>
            <p>Number of Ratings: {props.movie.ratings.count}</p>
            <Rater movie={props.movie} rateMovie={props.rateMovie}></Rater>
        </div>
    )

}

export default Rating;