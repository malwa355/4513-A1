import {useState, useEffect} from "react";



const Filter = (props) => {
    const [titleDisabled ,setTitleDisabled] = useState(false);
    const [genreDisabled ,setGenreDisabled] = useState(true);
    const [yearDisabled ,setYearDisabled] = useState(true);
    const [ratingDisabled ,setRatingDisabled] = useState(true);
    const [titleInput, setTitleInput] = useState("");
    const [genreInput, setGenreInput] = useState("");
    const [upperYearInput, setUpperYearInput] = useState("2023");
    const [lowerYearInput, setLowerYearInput] = useState("1940");
    const [upperRatingInput, setUpperRatingInput] = useState("10");
    const [lowerRatingInput, setLowerRatingInput] = useState("0");


    const handleFilterChoice = e => {
        setTitleDisabled(true);
        setGenreDisabled(true);
        setYearDisabled(true);
        setRatingDisabled(true);
        if(e.currentTarget.id === "title"){
            setTitleDisabled(false);
        } else if (e.currentTarget.id === "genre") {
            setGenreDisabled(false);
        } else if (e.currentTarget.id === "year") {
            setYearDisabled(false);
        } else if (e.currentTarget.id === "rating") {
            setRatingDisabled(false);
        }
    }
    const handleTitleChange = (e) => {
        setTitleInput(e.target.value)
    }
    const handleGenreChange = (e) => {
        setGenreInput(e.target.value)
    }
    const handleLowerYearChange = (e) => {
        setLowerYearInput(e.target.value)
    }
    const handleUpperYearChange = (e) => {
        setUpperYearInput(e.target.value)
    }
    const handleLowerRatingChange = (e) => {
        setLowerRatingInput(e.target.value)
    }
    const handleUpperRatingChange = (e) => {
        setUpperRatingInput(e.target.value)
    }
    const handleFilter = () => {
        if(titleDisabled === false) {
            props.filter("title", {"input":titleInput});
        } else if (genreDisabled === false) {
            props.filter("genre", {"input":genreInput});
        } else if (yearDisabled === false) {
            props.filter("year", {"inputLower": lowerYearInput, "inputUpper": upperYearInput});
        } else if (ratingDisabled === false) {
            props.filter("rating", {"inputLower": lowerRatingInput, "inputUpper": upperRatingInput});             
        }
    }
    const handleClear = () => {
        props.clear();
    } 
    return (
        
        <div className="bg-dk-blue h-screen w-72 mt-10">
            <h1 className="text-center mb-5 ml-5 font-header font-bold text-xl">Filter</h1>
            <label className="block  ml-5 mb-3">
                <input type="radio" defaultChecked={true} id="title" onChange={handleFilterChoice} name="filter"/>
                Title
                <input type="text" disabled={titleDisabled} onChange={handleTitleChange} value={titleInput} className="disabled:bg-slate-500 w-40 ml-7 shadow appearance-none border rounded h-7 py-2 px-3 -gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </label>
            <label id="genre" className="block  ml-5 mb-3">
                <input type="radio" name="filter" id="genre" onChange={handleFilterChoice}/>
                Genre
                <select disabled={genreDisabled} onChange={handleGenreChange} value={genreInput} className="disabled:bg-slate-500 ml-12 w-32 appearance-none h-7 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    {props.genreList.map((g,i) => <option key={i} value={g}>{g}</option>)}
                </select>
            </label>
            <label id="year" className="block ml-5 mb-3">
                <input type="radio" name="filter" id="year" onChange={handleFilterChoice} />
                Year:
                <div className="flex flex-col justify-between">
                <label className="block ml-20 mt-[-21px]">Less Than: {lowerYearInput}<input type="range" min="1940" max="2023" disabled={yearDisabled} onChange={handleLowerYearChange} value={lowerYearInput} className="mt-3 disabled:bg-slate-500 block h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"/></label>
                <label className="block ml-20">Greater Than: {upperYearInput}<input type="range" min="1940" max="2023" disabled={yearDisabled} onChange={handleUpperYearChange} value={upperYearInput} className="mt-3 disabled:bg-slate-500 block h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"/></label>
                </div>
            </label>
            <label className="block ml-5 mb-3">
                <input type="radio" name="filter" id="rating" onChange={handleFilterChoice}/>
                Rating:
                <label className="block ml-20 mt-[-21px]">Less Than: {lowerRatingInput}<input type="range" min="3" max="10" disabled={ratingDisabled} onChange={handleLowerRatingChange} value={lowerRatingInput} className="mt-3 disabled:bg-slate-500 block h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700" /></label>
                <label className="block ml-20">Greater Than: {upperRatingInput}<input type="range" min="3" max="10" disabled={ratingDisabled} onChange={handleUpperRatingChange} value={upperRatingInput} className="mt-3 disabled:bg-slate-500 block h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"/></label>
            </label>
            <div className="flex mt-5">
                <button className="ml-12 w-20 h-7 rounded bg-blue-900 hover:bg-blue-700 font-bold" onClick={handleClear}>Clear</button>
                <button className="ml-10 w-20 h-7 rounded bg-blue-900 hover:bg-blue-700 font-bold" onClick={handleFilter}>Filter</button>
            </div>
            <div className="w-3 fixed top-[110px] left-[276px] h-screen bg-slate-500 "><div className="h-screen flex items-center"><i className="fa-solid fa-caret-left fa-xl mb-32 ml-[2px] text-center"></i></div></div>
        </div>
    )

}

export default Filter;