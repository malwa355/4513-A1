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
                <input type="text"disabled={titleSelect}></input>
            </label>
            <label id="genre" className="block">
                <input type="radio" name="filter" id="genre" onChange={handleFilterChoice}/>
                Genre
                <input type="text" disabled={genreSelect}/>
            </label>
            <label id="year" className="block">
                <input type="radio" name="filter" id="year" onChange={handleFilterChoice} />
                Year
                <label>Less<input type="number" disabled={yearSelect}/></label>
                <label>Greater<input type="number" disabled={yearSelect}/></label>
            </label>
            <label className="block">
                <input type="radio" name="filter" id="rating" onChange={handleFilterChoice}/>
                rating
                <label>Less<input type="number"  disabled={ratingSelect}/></label>
                <label>Greater<input type="number"disabled={ratingSelect}/></label>
            </label>
            <div id="button-container" className="block">
                <button>Clear</button>
                <button>Filter</button>
            </div>
        </form>
    )

}

export default Filter;