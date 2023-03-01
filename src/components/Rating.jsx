/**This Component displays information about how people have rated a given film.
 * It displays the average user rating, the number of ratings the movie received,
 * and has a child Component that allows the user of the site to give their own
 * rating.
 * 
 * The props that are passed to this Component are:
 * movie: The movie object where the data is coming from.
 *        the data is in the movie.ratings subobject.
 * rateMovie: A drilled method that lets its child Component add a rating to the movie.
 * 
 **/
import React, {useState} from "react";
import Rater from "./Rater.jsx";
import Stars from "./Stars.jsx";

const Rating = (props) => {
    const [average] = useState(props.movie.ratings.average);
    const [count, updateCount] = useState(props.movie.ratings.count);
    
    const updateAverageValueDisplay =(rating)=>{ 
        updateCount(count+1);
        props.rateMovie(props.movie.id,rating);
    }

    return (
        <div>
            <p>Current Interest: {props.movie.ratings.popularity.toFixed(2)}</p>
            <p>Current Average Rating: {average}</p> <Stars input={average}></Stars>
            <p>Number of Ratings: {count}</p>
            <Rater movie={props.movie} rateMovie={props.rateMovie} 
                   updateAverageValueDisplay={updateAverageValueDisplay}>
            </Rater>
        </div>
    )

}

export default Rating;