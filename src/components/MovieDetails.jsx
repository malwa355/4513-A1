import React from "react";
import Header from "./Header.jsx";
import {Link} from "react-router-dom";
import Rating from "./Rating.jsx";

const MovieDetails = (props) => {

    const favoriteHandler = ()=>{
        props.addFavorite(props.movie.id);
    }
    return (
        <div>
            <Header></Header>
            hey yo, from MovieDetails
            <div>
                <div>
                    <h1>{props.movie.title}</h1>
                    <img src={`https://image.tmdb.org/movie/t/p/w780/${props.poster}`} alt={`Poster of the film: ${props.title}`}></img>
                </div>
                <div>
                    <div>
                        Release Date: {props.movie.release_date}
                        Runtime: {props.movie.runtime}
                        Tagline: {props.movie.tagline}
                        Revenue: {props.movie.revenue}
                        <a href={`https://www.imdb.com/title/${props.movie.imdb_id}`}>IMDB page for {props.movie.title}</a>
                        <a href={`https://www.themoviedb.org/movie/${props.movie.tmdb_id}`}>TMDB page for {props.movie.title}</a>
                        Overview: {props.movie.details.overview}
                        Genre: {props.movie.details.genres}
                    </div>
                    <Rating></Rating>
                </div>
                <div>
                    <Link to="/movies">
                        <button>Cancel</button>
                    </Link>
                    <button onClick={favoriteHandler}>❤ Add to Favs</button>
                </div>
            </div>
        </div>
    )

}

export default MovieDetails;