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
    props.addFavorite(props.movie.id);
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
  return (
    <div>
      <Header />
      <div className="ml-32">
        <div className="flex">
          <div className="pt-32">
            <h1 className=" text-header text-4xl mb-3 text-cyan-400">
              {props.movie.title}
            </h1>
            <img
              className="w-56 mr-10"
              src={`https://image.tmdb.org/movie/t/p/w342/${props.movie.poster}`}
              alt={`Poster of the film: ${props.movie.title}`}
              onClick={openModal}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/342x502";
              }}
            ></img>
          </div>
          <div className="fixed left-96">
            <div
              className={`${
                props.favoritesIsOpen ? "w-2/3" : "w-10/12"
              } props.inline-grid grid-col-2 mt-64`}
            >
              <div className="flex">
                <p className=" text-header text-xl text-cyan-400">
                  Release Date:
                </p>
                <div className=" text-header text-lg ml-2">
                  {props.movie.release_date}
                </div>
              </div>
              <div className="flex">
                <p className=" text-header text-xl text-cyan-400">Runtime:</p>
                <div className=" text-header text-lg ml-2">
                  {props.movie.runtime}
                </div>
              </div>
              <div className="flex">
                <p className=" text-header text-xl text-cyan-400">Tagline:</p>
                <div className=" text-header text-lg ml-2">
                  {props.movie.tagline}
                </div>
              </div>
              <div className="flex">
                <p className=" text-header text-xl text-cyan-400">Revenue:</p>
                <div className=" text-header text-lg ml-2">
                  {props.movie.revenue.toLocaleString()}
                </div>
              </div>
              <div
                className={`${
                  props.favoritesIsOpen ? "right-[505px]" : "right-72"
                } fixed  top-56`}
              >
                <div className="flex flex-col">
                  <a
                    className="text-cyan-400 text-header"
                    href={`https://www.imdb.com/title/${props.movie.imdb_id}`}
                  >
                    IMDB page for {props.movie.title}
                  </a>
                  <a
                    className="text-cyan-400 text-header"
                    href={`https://www.themoviedb.org/movie/${props.movie.tmdb_id}`}
                  >
                    TMDB page for {props.movie.title}
                  </a>
                </div>
              </div>
              {console.log(props.movie)}
              <div className="flex">
                <p className=" text-header text-xl text-cyan-400">Overview:</p>
                <div className=" text-header text-lg ml-2">
                  {props.movie.details.overview}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-header text-2xl text-cyan-400">Genre(s):</p>{" "}
        <ul>
          {props.movie.details.genres.map((g, index) => (
            <li key={index}>{g.name}</li>
          ))}
        </ul>
        <div className="flex mt-24">
          <div className="ml-72">
            <Rating movie={props.movie} rateMovie={props.rateMovie}></Rating>
          </div>
          <div className="ml-56">
            <Link to="/movies">
              <button className="w-20 h-10 mt-5 mr-10 rounded bg-cyan-600 hover:bg-cyan-400 font-bold">
                Cancel
              </button>
            </Link>
            <button
              className="w-32 h-10 mt-5 mr-10 rounded bg-cyan-600 hover:bg-cyan-400 font-bold"
              onClick={favoriteHandler}
            >
              <i className="fa-solid fa-heart" /*style={{color:"pink"}}*/></i>{" "}
              Add to Favs
            </button>
          </div>
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
