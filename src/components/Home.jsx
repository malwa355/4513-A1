import React, {useState} from "react";
import {Link} from "react-router-dom";


const Home = (props) => {
    const [input,setInput] = useState('');
    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    const searchTermHandler = ()=> {
        console.log(input);
        props.changeSearchTerm(input);
        console.log("updated " + input);
    }
    const clearTermHandler = ()=> {
        props.changeSearchTerm("");
        console.log("cleared search term");
    }

     
    return (
        <div className="bg-hero bg-cover flex justify-center items-center w-screen h-screen ">
            <div className="w-[550px] m-10 bg-dk-blue px-5 py-2 border-solid border-2 border-cyan-400">
                <h1 className="text-center mt-5 mb-10 font-header text-7xl">FilmStack</h1>
                <div className="flex justify-center mb-5"><input className="w-96 disabled:bg-slate-500 text-black shadow appearance-none border rounded h-7 py-2 px-3 -gray-700 leading-tight focus:outline-none focus:shadow-outline" type="search" onChange={inputHandler}value={input}/></div>
                <div className="flex justify-center">
                <Link className="flex justify-center" to="/movies">
                    <button className="w-48 h-10 mt-5 mr-10 mb-10 rounded bg-cyan-600 hover:bg-cyan-400 font-bold" onClick={searchTermHandler}>Show Matching Movies</button>
                </Link>
                <Link className="flex justify-center" to="/movies">
                    <button className="w-48 h-10 mt-5 mb-10 rounded bg-cyan-600 hover:bg-cyan-400 font-bold" onClick={clearTermHandler}>Show All Movies</button>
                </Link>
                </div>
            </div>
            <div className="fixed right-5 bottom-5">Photo by <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pawel Czerwinski</a> on <a href="https://unsplash.com/photos/NbSBVBuwyJo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        </div>
    )

}

export default Home;