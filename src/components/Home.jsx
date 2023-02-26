import React, {useState} from "react";
import {Link} from "react-router-dom";


const Home = (props) => {
    const [input,setInput] = useState('');
    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    const searchTermHandler = ()=> {
        props.changeSearchTerm(input);
        console.log("updated " + input);
    }
    const clearTermHandler = ()=> {
        props.changeSearchTerm("");
        console.log("cleared search term");
    }
    return (
        <div >
            <h1>Movie Browser</h1>
            Title:<input type="search" onChange={inputHandler}></input>
            <Link to="/movies">
                <button onClick={searchTermHandler}>Show Matching Movies</button>
            </Link>
            <Link to="/movies">
                <button onClick={clearTermHandler}>Show All Movies</button>
            </Link>
        </div>
    )

}

export default Home;