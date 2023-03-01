/**This is a component that takes a number, and creates a series of stars based on
 * the value. It does half stars as well. The star icons are from font-awesome, and the
 * method for rounding to the nearest 0.5 is from a StackOverflow answer found at:
 * https://stackoverflow.com/questions/6137986/javascript-roundoff-number-to-nearest-0-5
 * The answer was provided by 'newtron' in 2011, and edited in 2015 by 'saeraphin'.
 * 
 * The prop passed to this Component is:
 * input: The number to be represented by the stars, originally not rounded to the nearest 0.5.
 **/
import React from "react";

const Stars = (props) => {
    const fullStarCount = Math.trunc(props.input);
    const arr = new Array(10).fill(null);
    let rounded = props.input;
    rounded = (Math.round(rounded * 2) / 2).toFixed(1)
    arr.fill(1,0,fullStarCount);
    let halfStar = rounded;
    if(fullStarCount!==10){arr[fullStarCount] = halfStar;}
    return(
        <div>
        {arr.map((s,i)=>{
            if(s%1===0.5){return(<i className="fa-solid fa-star-half-stroke" key={i} style={{color:"orange"}}></i>)}
            else if(s===1 || s>fullStarCount ){return(<i className="fa-solid fa-star" key={i} style={{color:"orange"}}></i>)}
            else {return(<i className="fa-regular fa-star" key={i} style={{color:"orange"}}></i>)}
        })}
        </div>
    )
}

export default Stars;