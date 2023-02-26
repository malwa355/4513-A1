import React from "react";
import Header from "./Header.jsx";
import {Link} from "react-router-dom";
import Rating from "./Rating.jsx";
import Favorites from "./Favorites.jsx";
import Panel from "./Panel.jsx";

const MovieDetails = (props) => {
    console.log(props.movie);
    const favoriteHandler = ()=>{
        props.addFavorite(props.movie.id);
    }
    return (
        <div>
            <Header></Header>
            <div>
                <div>
                    <h1>{props.movie.title}</h1>
                    <img className="w-40" src={`https://image.tmdb.org/movie/t/p/w780/${props.movie.poster}`} alt={`Poster of the film: ${props.movie.title}`}></img>
                </div>
                <div>
                    <div className="inline-grid grid-col-2">
                        <p>Release Date: {props.movie.release_date}</p>
                        <p>Runtime: {props.movie.runtime}</p>
                        <p>Tagline: {props.movie.tagline}</p>
                        <p>Revenue: ${props.movie.revenue.toLocaleString()}</p>
                        <a href={`https://www.imdb.com/title/${props.movie.imdb_id}`}>IMDB page for {props.movie.title}</a>
                        <a href={`https://www.themoviedb.org/movie/${props.movie.tmdb_id}`}>TMDB page for {props.movie.title}</a>
                        {console.log(props.movie)}
                        <p>Overview: {props.movie.details.overview}</p>
                        <p>Genre(s):</p> <ul>{props.movie.details.genres.map( (g,index) => <li key={index}>{g.name}</li> )}</ul>
                    </div>
                    <Rating movie={props.movie}></Rating>
                </div>
                <div>
                    <Link to="/movies"> 
                        <button>Cancel</button>
                    </Link>
                    <button onClick={favoriteHandler}><i className="fa-solid fa-heart" /*style={{color:"pink"}}*/></i> Add to Favs</button>
                </div>
            </div>
            <Panel id="favorites">
                <Favorites favorites={props.favorites}></Favorites>
            </Panel>
        </div>
    )

}

export default MovieDetails;