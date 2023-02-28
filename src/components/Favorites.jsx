import React from "react";
import FavoritesItem from "./FavoritesItem.jsx";


const Favorites = (props) => {

    return (
        <div className="bg-dk-blue z-1 mt-10 h-screen w-72 flex flex-col overflow-scroll no-scrollbar">
            <h1 className="text-center mb-5 font-bold text-xl">Favorites</h1>
            {props.favorites.map((f,i) => <FavoritesItem movie={f} key={i} changeSelectedMovie={props.changeSelectedMovie} removeFavorite={props.removeFavorite}/>)}
        </div>
    )
}

export default Favorites;