import React from "react";
import FavoritesItem from "./FavoritesItem.jsx";


const Favorites = (props) => {

    return (
        <div className="bg-slate-500 z-1 h-screen w-72 flex flex-col">
            <h1 className="text-center mb-5">Favorites</h1>
            {props.favorites.map(f => <FavoritesItem movie={f}/>)}
        </div>
    )
}

export default Favorites;