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
        <h1 className="text-center mb-5 font-bold text-xl">Favorites</h1>
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
        } top-[120px] h-screen bg-slate-500 transition-all`}
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
