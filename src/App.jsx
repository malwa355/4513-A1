import logo from './logo.svg';
import './App.css';
import Home from './components/Home.jsx';
import Movies from './components/Movies.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import { Routes, Route } from 'react-router-dom';
import {useEffect, useState} from "react";
import {cloneDeep} from "lodash";

function App() {
  const[movies,setMovies] = useState([]);
  const[renderedMovies,setRenderedMovies] = useState([]);
  const[searchTerm, setSearchTerm] = useState("");
  const[favorites,setFavorites] = useState([]);
  const[selectedMovie,setSelectedMovie] = useState({});

  const changeSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  }
  const addFavorite = (movie) => {
    // if(favorites.find(m => m.id === movie.id)){ //Need to fix this.
      const copyFavorites = cloneDeep(favorites);
      copyFavorites.push(movie);
      setFavorites(copyFavorites);
    // }
  }
  const changeSelectedMovie = (movie) => {
    setSelectedMovie(cloneDeep(movie));
  }

  const rateMovie = (id,rating) =>{
    const copyMovies = movies;
    const movieIndex = copyMovies.findIndex(m=>m.id===id);
    copyMovies[movieIndex].userRating = rating;
    setMovies(copyMovies);
    console.log("updated " + rating);

  const filter = (field, term) => {
    console.log(field);
    console.log(term.inputLower);
    if(field === "title") {
      setRenderedMovies(movies.filter( m => m.title.toLowerCase().includes(term.input.toLowerCase())));
    } else if (field === "genre") {
      setRenderedMovies(movies.filter( m => (m.details.genres) ? m.details.genres.find(g => g.name === term.input):false));
    } else if (field === "year") {
      setRenderedMovies(movies.filter( m => m.release_date.split("-")[0] > term.inputLower && m.release_date.split("-")[0] < term.inputUpper));
    } else if (field === "rating") {
      setRenderedMovies(movies.filter( m => m.ratings.average > term.inputLower && m.ratings.average < term.inputUpper));
    }


  }

  const clear = () => {
    setRenderedMovies(cloneDeep(movies));
  }
  useEffect( () => {
    const url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=100";
    const localMovies = JSON.parse(localStorage.getItem("movies"));
    if(!localMovies){
    fetch(url)
      .then( resp => resp.json() )
      .then( data => {
        
        //REFERENCE FROM STACK OVERFLOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!vvvv
        const addedProperty = data.map(movie => {return({ ...movie, userRating: -1 })})
        setMovies(addedProperty);
        setRenderedMovies(addedProperty);
        localStorage.setItem("movies",JSON.stringify(addedProperty));
        

        console.log("Got movies from API and stored it!");
      })
      .catch( err => console.error(err));
    } else {
      setMovies(localMovies);
      setRenderedMovies(localMovies);
      console.log("Got movies from localStorage!");
    }
    
  }, []); 

  return (
    <main className="bg-sky-800">
      <Routes>
        <Route path='/' exact element={<Home changeSearchTerm = {changeSearchTerm}/>} />
        <Route path='/movies' exact element={<Movies movies={renderedMovies} searchTerm={searchTerm} changeSelectedMovie={changeSelectedMovie} favorites={favorites} addFavorite={addFavorite} filter={filter} clear={clear}/>}/>
        <Route path='/movieDetails' exact element={<MovieDetails movie={selectedMovie} rateMovie={rateMovie} favorites={favorites} addFavorite={addFavorite}/>} />
      </Routes>
    </main>
  );
}

export default App;
