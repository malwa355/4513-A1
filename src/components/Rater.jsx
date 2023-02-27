import React, {useState, setState} from "react";



const Rater = (props) => {
    const [input,setInput] = useState(5);
    const [flag, setFlag] = useState(props.movie.userRating);

    // setFlag(props.movie.userRating);
    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    const ratingSubmissionHandler = ()=> {
        props.rateMovie(props.movie.id,input);
        console.log("updated " + input);
        setFlag(input);
    }
    const test = ()=>{    
    if(flag===-1){
        return(
            <div>
                <input type="range" min="1" max="10" step="0.5" defaultValue="5" onChange={inputHandler}></input>
                <p>{input}</p>
                <button onClick={ratingSubmissionHandler}>Submit Rating</button>
            </div>)
    }else{
        return(
            <div>
                <p>You have rated the film as {flag}/10.</p>
            </div>
            )
    }}

    return (
        <div id="rater">
            {flag && test()}
        </div>
    )

}

export default Rater;