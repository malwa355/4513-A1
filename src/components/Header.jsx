import React from "react";
import logo from "../images/StackFilms.png"


const Header = (props) => {
    const aboutHandler = ()=>{
        console.log("This website is for viewing information about movies. You can filter based on a number of factors, and see descriptions and posters of different films.")
    }
    return (
        <div className="Header flex bg-violet-700">
            <div className="h-32"><img className="flex-auto h-32 rounded-2xl" src={logo} alt="Logo for FilmStack"/></div>
            <button className="flex-auto" onClick={aboutHandler}>About</button>
        </div>
    )

}

export default Header;