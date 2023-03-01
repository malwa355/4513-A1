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