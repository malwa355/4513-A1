/**This Component allows the user to give a rating for a film. They use a range
 * slider, and get a value that they then apply to the film through drilled methods.
 * 
 * The props that are passed to this Component are:
 * movie: The object of the film being rated.
 * rateMovie: A drilled method that allows the user to rate the film.
 * updateAverageValueDisplay: This method is used in the Component above
 *                            the rater in order to allow the count of
 *                            rates to increase by one when the user gives 
 *                            a rating. Originally we wanted to increase the
 *                            average value as well, but because it is floating
 *                            point math, it did not work at the small level we
 *                            were working at.
 * 
 **/
import React, {useState, setState} from "react";
import Stars from "./Stars.jsx";

const Rater = (props) => {
    const [input,setInput] = useState(5);
    const [flag, setFlag] = useState(props.movie.userRating);

    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    const ratingSubmissionHandler = ()=> {
        props.updateAverageValueDisplay(input);
        setFlag(input);
    }

    if(flag===-1){
        return(
            <div>
                <input type="range" min="1" max="10" step="0.5" defaultValue="5" onChange={inputHandler}></input>
                <p>{input}</p>
                <button onClick={ratingSubmissionHandler}>Submit Rating</button>
                <Stars input={input}></Stars>
            </div>)
    }else{
        return(
            <div>
                <p>You have rated the film as {flag}/10.</p>
                <Stars input={flag}></Stars>
            </div>
            )
    }
}

export default Rater;