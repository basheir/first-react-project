import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com/?apikey=72cc7589";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=title`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
         />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        ></img>
      </div>
        {
          movies?.length > 0 
          ? (
            <div className="container">
            {
              movies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))
            }
            
        </div>
          ): (
            <div className="empty">
              <h3 >No movies found</h3>
            </div>
          )
        }
        
     
    </div>
  );
};

export default App;
