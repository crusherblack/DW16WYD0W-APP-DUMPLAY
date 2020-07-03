import React from "react";
import MovieCard from "../MusicCard/MusicCard";
import "./CardGrid.css";

const CardGrid = ({ films, title, setPlayIndex, playIndex, auth }) => {
  const list = films.map((movie, index) => (
    <MovieCard
      movie={movie}
      key={movie.id}
      setPlayIndex={setPlayIndex}
      index={index}
      key={index}
      playIndex={playIndex}
      auth={auth}
    />
  ));

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
