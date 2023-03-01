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
            <div><div className="flex">
                <input type="range" min="0.5" max="10" step="0.5" defaultValue="5" onChange={inputHandler}></input>
                <p className="ml-5">{input}</p>
                </div>
                <button className="w-32 h-7 mt-2 mb-3 mr-10 rounded bg-cyan-600 hover:bg-cyan-400 font-bold" onClick={ratingSubmissionHandler}>Submit Rating</button>
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