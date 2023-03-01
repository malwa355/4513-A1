/**Movies is the main view of the application. As a view, it or its children
 * return every component visible on screen. As such, it returns the header,
 * filter panel, list of movies, and the favorites panel.
 * 
 * The props that are passed to this Component are only used in its children
 * components. None of them are directly used in this Component.  
 **/
import React from "react";
import Filter from "./Filter.jsx";
import Header from "./Header.jsx";
import MovieList from "./MovieList.jsx";
import Favorites from "./Favorites.jsx";
import Panel from "./Panel.jsx";

const Movies = (props) => {
  return (
    <div>
      <Header />
      <div>
        <Panel id="filter">
          <Filter
            filter={props.filter}
            clear={props.clear}
            genreList={props.genreList}
            filterIsOpen={props.filterIsOpen}
            toggleFilter={props.toggleFilter}
          />
        </Panel>
        <div className={`w-screen`}>
          <MovieList
            movies={props.movies}
            changeSelectedMovie={props.changeSelectedMovie}
            addFavorite={props.addFavorite}
            cleared={props.cleared}
            setClear={props.setClear}
            sort={props.sort}
            sortDirection={props.sortDirection}
            lastSorted={props.lastSorted}
            filterIsOpen={props.filterIsOpen}
            favoritesIsOpen={props.favoritesIsOpen}
          ></MovieList>
        </div>
        <Panel id="favorites">
          <Favorites
            favorites={props.favorites}
            changeSelectedMovie={props.changeSelectedMovie}
            removeFavorite={props.removeFavorite}
            favoritesIsOpen={props.favoritesIsOpen}
            toggleFavorites={props.toggleFavorites}
          />
        </Panel>
      </div>
    </div>
  );
};

export default Movies;
