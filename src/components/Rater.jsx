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
    const stars = () => {
        const fullStarCount = Math.trunc(input);
        console.log(fullStarCount);
        const arr = new Array(10).fill(null);
        let rounded = input;
        //cite stack overflow for this method vvvv!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        rounded = (Math.round(rounded * 2) / 2).toFixed(1)
        arr.fill(1,0,fullStarCount);
        let halfStar = rounded;
        console.log(halfStar);
        arr[fullStarCount] = halfStar;
        console.log(input);
        console.log(arr);
        return(
            <div>
            {arr.map((s,i)=>{
                if(s%1===0.5){return(<i className="fa-solid fa-star-half-stroke" key={i} style={{color:"orange"}}></i>)}
                else if(s===1 || s>fullStarCount ){return(<i className="fa-solid fa-star" key={i} style={{color:"orange"}}></i>)}
                else if(i!=10){return(<i className="fa-regular fa-star" key={i} style={{color:"orange"}}></i>)}
            })}
            </div>
        )
    }

    const test = ()=>{    
    if(flag===-1){
        return(
            <div>
                <input type="range" min="1" max="10" step="0.5" defaultValue="5" onChange={inputHandler}></input>
                <p>{input}</p>
                <button onClick={ratingSubmissionHandler}>Submit Rating</button>
                {stars()}
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