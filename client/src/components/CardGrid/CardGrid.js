import React from "react";
import MovieCard from "../MusicCard/MusicCard";
import "./CardGrid.css";

const CardGrid = ({ films, title }) => {
  const list = films.map((movie) => <MovieCard movie={movie} key={movie.id} />);

  return (
    <div className="movie-grid">
      <div className="movie-type">
        <p> {title} </p>
      </div>
      <div className="movie-list">{list} </div>
    </div>
  );
};

export default CardGrid;
