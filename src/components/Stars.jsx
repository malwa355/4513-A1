import React from "react";

const Stars = (props) => {
    const fullStarCount = Math.trunc(props.input);
    const arr = new Array(10).fill(null);
    let rounded = props.input;
    //cite stack overflow for this method vvvv!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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