import React from "react";
import Filter from "./Filter.jsx";
import Header from './Header.jsx';
import MovieList from "./MovieList.jsx";
import Favorites from "./Favorites.jsx"; 
import Panel from "./Panel.jsx"; 


const Movies = (props) => {
return(
    <div>
        <Header/>
        <div className="">
            <Panel id="filter">
                <Filter filter={props.filter} clear={props.clear}/>
            </Panel>
            <div className="w-3/4">
                <MovieList movies={props.movies} changeSelectedMovie={props.changeSelectedMovie} addFavorite={props.addFavorite} cleared={props.cleared} setClear={props.setClear} sort={props.sort} sortDirection={props.sortDirection} lastSorted={props.lastSorted} ></MovieList>
            </div> 
            <Panel id="favorites">
                <Favorites favorites={props.favorites}/>
            </Panel>  
        </div> 
    </div>
)
}

export default Movies;