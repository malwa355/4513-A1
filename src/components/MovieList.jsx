import React from "react";
import MovieListItem from "./MovieListItem.jsx";
import { useEffect } from "react";

const MovieList = (props) => {
  const handleSort = (e) => {
    console.log(e.target);
    if (e.target.id === "Title") {
      console.log(props.sortDirection);
      if (props.lastSorted === "title") {
        if (props.sortDirection === "asc") {
          props.sort("title", "dsc");
        } else if (props.sortDirection === "dsc") {
          props.sort("title", "asc");
        }
      } else {
        props.sort("title", "asc");
      }
    } else if (e.target.id === "Year") {
      if (props.lastSorted === "year") {
        if (props.sortDirection === "asc") {
          props.sort("year", "dsc");
        } else if (props.sortDirection === "dsc") {
          props.sort("year", "asc");
        }
      } else {
        props.sort("year", "asc");
      }
    } else if (e.target.id === "Rating") {
      if (props.lastSorted === "rating") {
        if (props.sortDirection === "asc") {
          props.sort("rating", "dsc");
        } else if (props.sortDirection === "dsc") {
          props.sort("rating", "asc");
        }
      } else {
        props.sort("rating", "asc");
      }
    } else if (e.target.id === "Popularity") {
      if (props.lastSorted === "popularity") {
        if (props.sortDirection === "asc") {
          props.sort("popularity", "dsc");
        } else if (props.sortDirection === "dsc") {
          props.sort("popularity", "asc");
        }
      } else {
        props.sort("popularity", "asc");
      }
    }
  };
 
  return ( 
    <div>
      <h1 className="text-center fixed bg-dk-blue w-screen h-10 mt-[80px] z-0 font-bold font-header text-xl">
        Movies
      </h1>
      {props.movies.length > 0 ? 
      <ul className={`inline-grid grid-cols-1 transition-all ${props.filterIsOpen === true ? 'ml-80' : 'ml-10'} ${props.favoritesIsOpen === true ? 'mr-80' : 'mr-0'} mt-32`}>
        <li className="inline-grid grid-cols-7">
          <div></div>
          <div className="m-auto font-bold text-xl">
            <button onClick={handleSort}>
              <i
                id="Title"
                className={`fa-solid fa-sort${props.lastSorted === "title" ? (props.sortDirection === "asc" ? '-up':'-down'):''} mr-1`}
              ></i>
            </button>
            Title
          </div>
          <div className="m-auto font-bold text-xl">
            <button onClick={handleSort}>
              <i id="Year" className={`fa-solid fa-sort${props.lastSorted === "year" ? (props.sortDirection === "asc" ? '-up':'-down'):''} mr-1`}></i>
            </button>
            Year
          </div>
          <div className="m-auto font-bold text-xl">
            <button onClick={handleSort}>
              <i id="Rating" className={`fa-solid fa-sort${props.lastSorted === "rating" ? (props.sortDirection === "asc" ? '-up':'-down'):''} mr-1`}></i>
            </button>
            Rating
          </div>
          <div className="m-auto font-bold text-xl">
            <button onClick={handleSort}>
              <i id="Popularity" className={`fa-solid fa-sort${props.lastSorted === "popularity" ? (props.sortDirection === "asc" ? '-up':'-down'):''} mr-1`}></i>
            </button>
            Popularity
          </div>
          <div></div>
          <div></div>
        </li>
        {props.movies.map((m) => (
          <MovieListItem
            key={m.id}
            movie={m}
            changeSelectedMovie={props.changeSelectedMovie}
            addFavorite={props.addFavorite}
          />
        ))}
      </ul>
      : 
        <ul className="inline-grid grid-cols-1 items-center w-screen mt-36"><li className="flex justify-center"><div className="flex flex-col "><i className="fa-solid fa-heart-crack text-8xl text-center"></i><div className="mt-5 text-xl ">Sorry, I Can't Find That Film</div></div></li></ul>
       }
    </div>
  );
};

export default MovieList;
