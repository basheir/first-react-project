import { useEffect } from "react";
import "./App.css";


import SearchIcon from "./search.svg";
const movie1 = {
    Title: "Reign of Judges: Title of Liberty - Concept Short",
    Year: "2018",
    imdbID: "tt4275958",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWM0MDI1ZmItZTYzNi00ZWVlLTg5MTctNzllNjY2ZTI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg",
  };

const API_URL = "https://www.omdbapi.com/?apikey=72cc7589";
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=title`);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input placeholder="Search for movies" />
        <img src={SearchIcon} alt="search" onClick={() => {}}></img>
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Title}</p>
          </div>
          <div>
            <img src={movie1.Poster} ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
