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