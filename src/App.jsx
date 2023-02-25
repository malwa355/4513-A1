import logo from './logo.svg';
import './App.css';
import Home from './components/Home.jsx';
import Movies from './components/Movies.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import { Routes, Route } from 'react-router-dom';
import {useEffect, useState} from "react";

function App() {
  const[movies,setMovies] = useState([])
  const[searchTerm, setSearchTerm] = useState("");

  // useEffect(  () => {
  //   const getData = async () => {
  //     try {
  //       const url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=200";
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       console.log(data);
  //       setMovies(data);
  //       localStorage.setItem("movies",JSON.stringify(movies));
  //       console.log("Got movies from API and stored it!");
  //     }
  //     catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   const localMovies = localStorage.getItem("movies");
  //   console.log(localMovies);
  //   if(!localMovies) {
  //     getData();

  //   } else {
  //     setMovies(localMovies);
  //     console.log(localMovies);
  //     console.log("Got movies from localStorage!");
  //   }
    
  // }, [] );

  const changeSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  }

  useEffect( () => {
    const url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=100";
    const localMovies = JSON.parse(localStorage.getItem("movies"));
    if(!localMovies){
    fetch(url)
      .then( resp => resp.json() )
      .then( data => {
        setMovies(data);
        localStorage.setItem("movies",JSON.stringify(data));
        console.log("Got movies from API and stored it!");
      })
      .catch( err => console.error(err));
    } else {
      setMovies(localMovies);
      console.log("Got movies from localStorage!");
    }
    
  }, []); 
  
  return (
    <main>
      <Routes>
        <Route path='/' exact element={<Home setSearchTerm = {setSearchTerm}/>} />
        <Route path='/movies' exact element={<Movies movies={movies} searchTerm={searchTerm}/>} />
        <Route path='/movieDetails' exact element={<MovieDetails movies={movies}/>} />
      </Routes>
    </main>
  );
}

export default App;
