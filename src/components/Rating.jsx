import React from "react";
import Rater from "./Rater.jsx";


const Rating = (props) => {
    const fullStarCount = Math.trunc(props.movie.ratings.average);
    const arr = new Array(10).fill(null);
    let rounded = props.movie.ratings.average;
    //cite stack overflow for this method vvvv!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    rounded = (Math.round(rounded * 2) / 2).toFixed(1)
    arr.fill(1,0,fullStarCount);
    let halfStar = rounded;
    if(fullStarCount!=10){arr[fullStarCount] = halfStar;}
    return (
        <div>
            <p>Current Interest: {props.movie.ratings.popularity.toFixed(2)}</p>
            <p>Current Average Rating: {props.movie.ratings.average} {
                arr.map((s,i)=>{
                    if(s%1===0.5){return(<i className="fa-solid fa-star-half-stroke" key={i} style={{color:"orange"}}></i>)}
                    else if(s===1 || s>fullStarCount ){return(<i className="fa-solid fa-star" key={i} style={{color:"orange"}}></i>)}
                    else {return(<i className="fa-regular fa-star" key={i} style={{color:"orange"}}></i>)}
                })
            }</p>
            <p>Number of Ratings: {props.movie.ratings.count}</p>
            <Rater movie={props.movie} rateMovie={props.rateMovie}></Rater>
        </div>

    )

}

export default Rating;