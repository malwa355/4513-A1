import React from "react";



const Header = (props) => {
    const logoAddress="../images/logo.jpg";
    const aboutHandler = ()=>{
        console.log("This website is for viewing information about movies. You can filter based on a number of factors, and see descriptions and posters of different films.")
    }
    return (
        <div class="Header">
            <img src = {logoAddress}/>
            <button onClick={aboutHandler}>About</button>
        </div>
    )

}

export default Header;