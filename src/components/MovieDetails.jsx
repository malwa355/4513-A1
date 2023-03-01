import React, { useState } from "react";
import Header from "./Header.jsx";
import { Link } from "react-router-dom";
import Rating from "./Rating.jsx";
import Favorites from "./Favorites.jsx";
import Panel from "./Panel.jsx";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "30%",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement(document.getElementById("root"));

const MovieDetails = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log(props.movie);
  const favoriteHandler = () => {
    props.addFavorite(props.movie);
  };
  function openModal() {
    setModalIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  function conditionalFavorite() {
    if(!props.favorites.find((m) => m.id === props.movie.id)) {
        return(<button onClick={favoriteHandler}>
               <i className="fa-solid fa-heart">
               </i> Add to Favs</button>)}
}
  return (
    <div>
      <Header />
      <div>
        <div>
          <h1>{props.movie.title}</h1>
          <img
            className="w-40"
            src={`https://image.tmdb.org/movie/t/p/w342/${props.movie.poster}`}
            alt={`Poster of the film: ${props.movie.title}`}
            onClick={openModal}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/342x502";
            }}
          ></img>
        </div>
        <div>
          <div className={`${props.favoritesIsOpen ? 'w-3/4': "w-9/10"} props.inline-grid grid-col-2 `}>
            <p>Release Date: {props.movie.release_date}</p>
            <p>Runtime: {props.movie.runtime}</p>
            <p>Tagline: {props.movie.tagline}</p>
            <p>Revenue: ${props.movie.revenue.toLocaleString()}</p>
            <a href={`https://www.imdb.com/title/${props.movie.imdb_id}`}>
              IMDB page for {props.movie.title}
            </a>
            <a href={`https://www.themoviedb.org/movie/${props.movie.tmdb_id}`}>
              TMDB page for {props.movie.title}
            </a>
            {console.log(props.movie)}
            <p>Overview: {props.movie.details.overview}</p>
            <p>Genre(s):</p>{" "}
            <ul>
              {props.movie.details.genres.map((g, index) => (
                <li key={index}>{g.name}</li>
              ))}
            </ul>
          </div>
          <Rating movie={props.movie} rateMovie={props.rateMovie}></Rating>
        </div>
        <div>
          <Link to="/movies">
            <button>Cancel</button>
          </Link>
          {conditionalFavorite()}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Poster Modal"
      >
        <img
          src={`https://image.tmdb.org/movie/t/p/w780/${props.movie.poster}`}
          onClick={closeModal}
          alt={`Larger poster of the film: ${props.movie.title}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/780x1145";
          }}
        ></img>
      </Modal>
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
  );
};

export default MovieDetails;
