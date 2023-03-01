/**The FavoriteItem Component is a film that sits in the favorites bar.
 * It has methods to open the movieDetail view for that film, and to remove
 * the film from the favorites bar. The fading functionality is heavily based on code from
 * https://dev.to/jerocosio/how-to-animate-a-button-on-click-with-tailwindcss-in-next-js-or-react-js-30cl
 * written by Jeronimo Cosio. We took his same idea, but instead of wiggle, we made a custom fade animation,
 * and, in the onAnimationEnd event, we also have to remove the item from the favorites bar.
 * 
 * The props that are passed to this Component are:
 * movie: The film in question.
 * key: index.
 * changeSelectedMovie: A drilled method to change the film to view in detailed view.
 * removeFavorite: A drilled method to remove the film from the list.
 **/
import React from "react";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";


const FavoritesItem = (props) => {
    const[effect,setEffect] = useState(false);

    const detailsHandler = () => {
        props.changeSelectedMovie(props.movie);
    }
    const removeFavoriteHandler = () => {
        setEffect(true);
        
    }
  
    return (
        <div>
            <Link to="/movieDetails" onClick={detailsHandler}  className="grid grid-cols-2">
                    <div className={`${effect && "animate-fade 1s"}`} 
                         onAnimationEnd={()=>{
                            setEffect(false);
                            props.removeFavorite(props.movie);
                            }}>
                        <img className="ml-5 w-24 inline-block" src={`https://image.tmdb.org/movie/t/p/w780/${props.movie.poster}`} alt={`Poster of the film: ${props.movie.title}`}
                            onError={(e) => {e.target.onerror=null; e.target.src='https://via.placeholder.com/92x130'}}/>
                        <div className="inline-block">{props.movie.title}</div>    
                    </div> 
            </Link>
            <button onClick={removeFavoriteHandler} className="relative left-[105px] bottom-[155px]"><i className="fa-solid fa-heart-circle-xmark fa-lg text-red-900"></i></button>
        </div>
    )
}

export default FavoritesItem;