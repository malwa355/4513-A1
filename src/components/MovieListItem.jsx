/**This Component is each entry in the list of movies. It allows the user to see
 * the data on that movie, including the poster, title, year, rating, popularity,
 * and the ability to add it as a favorite or open it.
 * 
 * The props that are passed to this Component are:
 * key: index
 * movie: The film object in question. This object holds all of the aforementioned
 *        data.
 * changeSelectedMovie: A drilled method that allows the user to click on this movie
 *                      and see its information in the movieDetail view.
 * addFavorite: A drilled method that allows the user to click on a button to add the
 *              movie to their favorites list.
 **/
import React from "react";
import {Link} from "react-router-dom";


const MovieListItem = (props) => {
    const detailsHandler = () => {
        props.changeSelectedMovie(props.movie);
    }
    const favoriteHandler = () => {
        props.addFavorite(props.movie);
    }
    return (
        <li className="inline-grid grid-cols-7 align-middle mt-5">
            <Link to="/movieDetails" onClick={detailsHandler}>
            <img className="w-24 " src={`https://image.tmdb.org/movie/t/p/w92/${props.movie.poster}`} alt={`Poster of the film: ${props.movie.title}`} 
                 onError={(e) => {e.target.onerror=null; e.target.src='https://via.placeholder.com/92x135'}}/>
            </Link>
            <Link to="/movieDetails" onClick={detailsHandler} className="m-auto">
            {props.movie.title}
            </Link>
            <div className="m-auto">{props.movie.release_date.split("-")[0]}</div>
            <div className="m-auto">{props.movie.ratings.average}</div>
            <div className="m-auto">{props.movie.ratings.popularity.toFixed(2)}</div>
            <button onClick={favoriteHandler}><i className="fa-solid fa-heart text-red-900"></i></button>
            <Link to="/movieDetails" onClick={detailsHandler} className="m-auto">
                <button>View</button>
            </Link>
        </li>
    )
}

export default MovieListItem;