import {useState} from "react";



const Filter = (props) => {
    const [titleDisabled ,setTitleDisabled] = useState(false);
    const [genreDisabled ,setGenreDisabled] = useState(true);
    const [yearDisabled ,setYearDisabled] = useState(true);
    const [ratingDisabled ,setRatingDisabled] = useState(true);
    const [titleInput, setTitleInput] = useState("");
    const [genreInput, setGenreInput] = useState("");
    const [upperYearInput, setUpperYearInput] = useState("");
    const [lowerYearInput, setLowerYearInput] = useState("");
    const [upperRatingInput, setUpperRatingInput] = useState("");
    const [lowerRatingInput, setLowerRatingInput] = useState("");

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
        if(titleDisabled == false) {
            
        } else if (genreDisabled == false) {

        } else if (yearDisabled == false) {

        } else if (ratingDisabled == false) {
                
        }
    }
    const handleClear = () => {

    }
    return (
        <form className="bg-slate-500 h-screen">
            <label className="block">
                <input type="radio" defaultChecked={true} id="title" onChange={handleFilterChoice} name="filter"/>
                Title
                <input type="text"disabled={titleDisabled} onChange={handleTitleChange} value={titleInput} className="disabled:bg-slate-400"/>
            </label>
            <label id="genre" className="block">
                <input type="radio" name="filter" id="genre" onChange={handleFilterChoice}/>
                Genre
                <input type="text" disabled={genreDisabled} onChange={handleGenreChange}value={genreInput} className="disabled:bg-slate-400"/>
            </label>
            <label id="year" className="block">
                <input type="radio" name="filter" id="year" onChange={handleFilterChoice} />
                Year
                <div className="flex flex-col justify-between">
                <label className="block ml-16">Less<input type="number" disabled={yearDisabled} onChange={handleLowerYearChange} value={lowerYearInput} className="ml-8 disabled:bg-slate-400"/></label>
                <label className="block ml-16">Greater<input type="number" disabled={yearDisabled} onChange={handleUpperYearChange} value={upperYearInput} className="ml-[9px] disabled:bg-slate-400"/></label>
                </div>
            </label>
            <label className="block">
                <input type="radio" name="filter" id="rating" onChange={handleFilterChoice}/>
                rating
                <label className="block ml-16">Less<input type="number"  disabled={ratingDisabled} onChange={handleLowerRatingChange} value={lowerRatingInput} className="ml-8 disabled:bg-slate-400"/></label>
                <label className="block ml-16">Greater<input type="number"disabled={ratingDisabled} onChange={handleUpperRatingChange} value={upperRatingInput} className="ml-[9px] disabled:bg-slate-400"/></label>
            </label>
            <div className="block mt-5">
                <button className="ml-16" onClick={handleClear}>Clear</button>
                <button className="ml-16" onClick={handleFilter}>Filter</button>
            </div>
        </form>
    )

}

export default Filter;