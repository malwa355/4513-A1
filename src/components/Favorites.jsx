/**
 * Favorites object is the panel on the left side of the screen on the movies and movie detail views.
 * It holds a list of FavoriteItems. The user has the ability to add and remove favorite films to this list.
 * Once an item has been added, it cannot be added again.
 * 
 * The props that are passed to this Component are:
 *  favorites: An array of movie objects.
 *  changeSelectedMovie: A drilled function that allows the user to open movieDetail view
 *                       from the favorites bar.
 *  removeFavorite: removes movie object from the array.
 *  favoritesIsOpen: Determines whether the drawer starts open or closed.
 *  toggleFavorites: Allows the opening or closing of the drawer.
 **/

 import { useState } from "react";
import FavoritesItem from "./FavoritesItem.jsx";

const Favorites = (props) => {
  const [panelOpen, setPanelOpen] = useState("true");
  const handlePanel = () => {
    setPanelOpen(!panelOpen)
    props.toggleFavorites(props.favoritesIsOpen);
  };
  return (
    <div>
      <div className={`transition-all ease-in-out fixed ${props.favoritesIsOpen === true ? 'right-[0px]': '-right-72'}`}>
      <div className={`bg-dk-blue mt-10 h-screen flex flex-col w-72 overflow-scroll no-scrollbar`}>
        <h1 className="text-center mb-5 mt-2 font-bold font-header text-2xl">Favorites</h1>
        {props.favorites.map((f, i) => (
          <FavoritesItem
            movie={f}
            key={i}
            changeSelectedMovie={props.changeSelectedMovie}
            removeFavorite={props.removeFavorite}
          />
        ))}
      </div>
      </div>
      <div
        className={`ease-in-out w-3 fixed ${
          props.favoritesIsOpen === true ? "right-[276px]" : "right-0"
        } top-[120px] h-screen bg-cyan-600 hover:bg-cyan-400 transition-all`}
      >
        <button onClick={handlePanel} className="h-screen flex items-center">
          <i
            className={`fa-solid ${
              props.favoritesIsOpen === true
                ? "fa-caret-right ml-[-1px]"
                : "fa-caret-left ml-[1px]"
            } fa-xl mb-32 text-center`}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Favorites;
