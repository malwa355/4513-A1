import "./App.css";
import Home from "./components/Home.jsx";
import Movies from "./components/Movies.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { cloneDeep } from "lodash";
import spinner from "./images/spinner2.gif";

function App() {
  const [movies, setMovies] = useState([]);
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [lastSorted, setLastSorted] = useState("title");
  const [sortDirection, setSortDirection] = useState("asc");
  const [genreList, setGenreList] = useState([]);
  const [filterIsOpen, setFilterIsOpen] = useState(true);
  const [favoritesIsOpen, setFavoritesIsOpen] = useState(true);
  const [loaded,setLoaded] = useState(false);

  const changeSearchTerm = (newSearchTerm) => {
    if(newSearchTerm===null) {
      setRenderedMovies(movies);
      setSearchTerm(newSearchTerm);
    } else {
      setSearchTerm(newSearchTerm);
      filter("title",{input:newSearchTerm});
    }
  };
  const addFavorite = (movie) => {
    if (!favorites.find((m) => m.id === movie.id)) {
      const copyFavorites = cloneDeep(favorites);
      copyFavorites.push(movie);
      setFavorites(copyFavorites);
    }
  };
  const changeSelectedMovie = (movie) => {
    setSelectedMovie(cloneDeep(movie));
  };
  const removeFavorite = (movie) => {
    const copyFavorites = cloneDeep(favorites);
    copyFavorites.splice(
      copyFavorites.findIndex((m) => m.id === movie.id),
      1
    );
    setFavorites(copyFavorites);
  };
  const rateMovie = (id, rating) => {
    const copyMovies = movies;

    const movieIndex = copyMovies.findIndex(m => m.id === id);
    
    copyMovies[movieIndex].userRating = rating;
    copyMovies[movieIndex].ratings.count++;
    //Changing the average rating to reflect the user's rating does not work,
    //as the math results in a float that has a lower value, even if the user rated higher
    //than the average.

    setMovies(copyMovies);
    console.log("updated " + rating);
  };
  const filter = (field, term) => {
    console.log(field);
    console.log(term.inputLower);

    if (field === "title") {
      if(term.input.length>0){
        setRenderedMovies(
          movies.filter((m) =>
            m.title.toLowerCase().includes(term.input.toLowerCase())
          )
        );
      } else {
        setRenderedMovies([]);
      }

    } else if (field === "genre") {
      setRenderedMovies(
        movies.filter((m) =>
          m.details.genres
            ? m.details.genres.find((g) => g.name === term.input)
            : false
        )
      );
    } else if (field === "year") {
      setRenderedMovies(
        movies.filter(
          (m) =>
            m.release_date.split("-")[0] > term.inputLower &&
            m.release_date.split("-")[0] < term.inputUpper
        )
      );
    } else if (field === "rating") {
      setRenderedMovies(
        movies.filter(
          (m) =>
            m.ratings.average > term.inputLower &&
            m.ratings.average < term.inputUpper
        )
      );
    }
  };
  const compareTitleAsc = (a, b) => {
    return a.title.localeCompare(b.title);
  };
  const compareTitleDsc = (a, b) => {
    return b.title.localeCompare(a.title);
  };
  const compareYearAsc = (a, b) => {
    if (a.release_date.split("-")[0] > b.release_date.split("-")[0]) {
      return 1;
    } else if (a.release_date.split("-")[0] < b.release_date.split("-")[0]) {
      return -1;
    } else {
      return 0;
    }
  };
  const compareYearDsc = (a, b) => {
    if (b.release_date.split("-")[0] > a.release_date.split("-")[0]) {
      return 1;
    } else if (b.release_date.split("-")[0] < a.release_date.split("-")[0]) {
      return -1;
    } else {
      return 0;
    }
  };
  const compareRatingAsc = (a, b) => {
    if (a.ratings.average > b.ratings.average) {
      return 1;
    } else if (a.ratings.average < b.ratings.average) {
      return -1;
    } else {
      return 0;
    }
  };
  const compareRatingDsc = (a, b) => {
    if (b.ratings.average > a.ratings.average) {
      return 1;
    } else if (b.ratings.average < a.ratings.average) {
      return -1;
    } else {
      return 0;
    }
  };
  const comparePopularityAsc = (a, b) => {
    if (a.ratings.popularity > b.ratings.popularity) {
      return 1;
    } else if (a.ratings.popularity < b.ratings.popularity) {
      return -1;
    } else {
      return 0;
    }
  };
  const comparePopularityDsc = (a, b) => {
    if (b.ratings.popularity > a.ratings.popularity) {
      return 1;
    } else if (b.ratings.popularity < a.ratings.popularity) {
      return -1;
    } else {
      return 0;
    }
  };
  const initialSort = (m) => {
    return cloneDeep(m.sort(compareTitleAsc));
  };
  const sort = (term, direction) => {
    setLastSorted(term);
    setSortDirection(direction);
    console.log(direction + " here");
    if (term === "title") {
      if (direction === "asc") {
        setRenderedMovies(cloneDeep(renderedMovies.sort(compareTitleAsc)));
      } else if (direction === "dsc") {
        setRenderedMovies(cloneDeep(renderedMovies.sort(compareTitleDsc)));
      }
    } else if (term === "year") {
      if (direction === "asc") {
        setRenderedMovies(cloneDeep(renderedMovies.sort(compareYearAsc)));
      } else if (direction === "dsc") {
        setRenderedMovies(cloneDeep(renderedMovies.sort(compareYearDsc)));
      }
    } else if (term === "rating") {
      if (direction === "asc") {
        setRenderedMovies(cloneDeep(renderedMovies.sort(compareRatingAsc)));
      } else if (direction === "dsc") {
        setRenderedMovies(cloneDeep(renderedMovies.sort(compareRatingDsc)));
      }
    } else if (term === "popularity") {
      if (direction === "asc") {
        setRenderedMovies(cloneDeep(renderedMovies.sort(comparePopularityAsc)));
      } else if (direction === "dsc") {
        setRenderedMovies(cloneDeep(renderedMovies.sort(comparePopularityDsc)));
      }
    }
  };
  const clear = () => {
    setRenderedMovies(cloneDeep(movies));
    setLastSorted("");
    setSortDirection("");
  };
  const toggleFilter = (state) => {
    setFilterIsOpen(!state)
  }
  const toggleFavorites = (state) => {
    setFavoritesIsOpen(!state)
  }
  const getGenres = (movies) => {
    movies.map((m) => {
      if (m.details.genres) {
        m.details.genres.map((g) => {
          const list = genreList;
          if (!genreList.includes(g.name)) {
            list.push(g.name);
            setGenreList(list);
          }
        });
      }
    });
  };
  useEffect(() => {
    const url =
      "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=100";
    const localMovies = JSON.parse(localStorage.getItem("movies"));
    if (!localMovies) {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          //REFERENCE FROM STACK OVERFLOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!vvvv
          const addedProperty = data.map((movie) => {
            return { ...movie, userRating: -1 };
          });
          const sortedAddedProperty = initialSort(addedProperty);
          setMovies(sortedAddedProperty);
          getGenres(sortedAddedProperty);
          setRenderedMovies(sortedAddedProperty);
          localStorage.setItem("movies", JSON.stringify(sortedAddedProperty));

          console.log("Got movies from API and stored it!");
          setLoaded(true);
        })
        .catch((err) => console.error(err));
    } else {
      const sortedLocalMovies = initialSort(localMovies);
      setMovies(sortedLocalMovies);
      getGenres(sortedLocalMovies);
      setRenderedMovies(sortedLocalMovies);
      console.log("Got movies from localStorage!");
      setLoaded(true);
    }
  }, []);

  if(!loaded){
    return(
      <div>
        <img src={spinner}></img>
      </div>
    )
  }
  else{
  return (
    <main className="bg-slate-800">
      <Routes>
        <Route
          path="/"
          exact
          element={<Home changeSearchTerm={changeSearchTerm} />}
        />
        <Route
          path="/movies"
          exact
          element={
            <Movies
              movies={renderedMovies}
              searchTerm={searchTerm}
              changeSearchTerm={changeSearchTerm}
              changeSelectedMovie={changeSelectedMovie}
              favorites={favorites}
              addFavorite={addFavorite}
              filter={filter}
              clear={clear}
              sort={sort}
              sortDirection={sortDirection}
              lastSorted={lastSorted}
              removeFavorite={removeFavorite}
              genreList={genreList}
              filterIsOpen={filterIsOpen}
              toggleFilter={toggleFilter}
              favoritesIsOpen={favoritesIsOpen}
              toggleFavorites={toggleFavorites}
            />
          }
        />
        <Route
          path="/movieDetails"
          exact
          element={
            <MovieDetails
              movie={selectedMovie}
              rateMovie={rateMovie}
              favorites={favorites}
              addFavorite={addFavorite}
              changeSelectedMovie={changeSelectedMovie}
              removeFavorite={removeFavorite}
              favoritesIsOpen={favoritesIsOpen}
              toggleFavorites={toggleFavorites}
            />
          }
        />
      </Routes>
    </main>
  );}
}

export default App;
