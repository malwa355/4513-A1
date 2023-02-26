import React from "react";



const Rating = (props) => {
    const fullStarCount = props.movie.ratings.average.toFixed(0);
    const arr = new Array(10).fill(null);
    let rounded = props.movie.ratings.average;
    //cite stack overflow for this method vvvv!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    rounded = (Math.round(rounded * 2) / 2).toFixed(1)
    arr.fill(1,0,fullStarCount);
    let halfStar = rounded%1;
    arr[fullStarCount-1] = halfStar;
    console.log(props.movie.ratings.average);
    console.log(arr);
    return (
        <div>
            <p>Current Interest: {props.movie.ratings.popularity.toFixed(2)}</p>
            <p>Current Average Rating: {props.movie.ratings.average} {
                arr.map((s,i)=>{
                    if(s===1){return(<i className="fa-solid fa-star" key={i} style={{color:"orange"}}></i>)}
                    else if(s===0.5){return(<i className="fa-solid fa-star-half-stroke" key={i} style={{color:"orange"}}></i>)}
                    else {return(<i className="fa-regular fa-star" key={i} style={{color:"orange"}}></i>)}
                })
            }</p>
            <p>Number of Ratings: {props.movie.ratings.count}</p>
            {/* <Rater rateMovie={props.rateMovie}></Rater> */}
        </div>

    )

}

export default Rating;