import {useState} from "react";



const Filter = (props) => {
    const [titleSelect,setTitleSelect] = useState(false);
    const [genreSelect,setGenreSelect] = useState(true);
    const [yearSelect,setYearSelect] = useState(true);
    const [ratingSelect,setRatingSelect] = useState(true);
    const handleFilterChoice = e => {
        setTitleSelect(true);
        setGenreSelect(true);
        setYearSelect(true);
        setRatingSelect(true);
        if(e.currentTarget.id === "title"){
            setTitleSelect(false);
        } else if (e.currentTarget.id === "genre") {
            setGenreSelect(false);
        } else if (e.currentTarget.id === "year") {
            setYearSelect(false);
        } else if (e.currentTarget.id === "rating") {
            setRatingSelect(false);
        }
    }
    return (
        <form>
            <label className="block">
                <input type="radio" defaultChecked={true} id="title" onChange={handleFilterChoice} name="filter"/>
                Title
                <input type="text"disabled={titleSelect} className="disabled:bg-slate-400"/>
            </label>
            <label id="genre" className="block">
                <input type="radio" name="filter" id="genre" onChange={handleFilterChoice}/>
                Genre
                <input type="text" disabled={genreSelect} className="disabled:bg-slate-400"/>
            </label>
            <label id="year" className="block">
                <input type="radio" name="filter" id="year" onChange={handleFilterChoice} />
                Year
                <div className="flex flex-col justify-between">
                <label className="block ml-16">Less<input type="number" disabled={yearSelect} className="ml-8 disabled:bg-slate-400"/></label>
                <label className="block ml-16">Greater<input type="number" disabled={yearSelect} className="ml-[9px] disabled:bg-slate-400"/></label>
                </div>
            </label>
            <label className="block">
                <input type="radio" name="filter" id="rating" onChange={handleFilterChoice}/>
                rating
                <label className="block ml-16">Less<input type="number"  disabled={ratingSelect} className="ml-8 disabled:bg-slate-400"/></label>
                <label className="block ml-16">Greater<input type="number"disabled={ratingSelect}className="ml-[9px] disabled:bg-slate-400"/></label>
            </label>
            <div className="block mt-5">
                <button className="ml-16">Clear</button>
                <button className="ml-16">Filter</button>
            </div>
        </form>
    )

}

export default Filter;