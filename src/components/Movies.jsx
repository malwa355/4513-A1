import React from "react";
import Filter from "./Filter.jsx";
import Header from './Header.jsx';
import MovieList from "./MovieList.jsx";
import Favorites from "./Favorites.jsx"; 

const Movies = (props) => {
return(
    <div>
        <Header/>
        <div>
            <Filter></Filter>
            <MovieList></MovieList>
            <Favorites></Favorites>
        </div>    
    </div>
)
}

export default Movies;