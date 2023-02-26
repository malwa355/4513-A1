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
            <Panel>
                <Filter/>
            </Panel>
            <div>
                <MovieList movies={props.movies} changeSelectedMovie={props.changeSelectedMovie}></MovieList>
                <Favorites></Favorites>
            </div> 
            <Panel>
                <Favorites/>
            </Panel>  
        </div> 
    </div>
)
}

export default Movies;