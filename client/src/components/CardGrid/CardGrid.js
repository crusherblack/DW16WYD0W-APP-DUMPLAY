import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import MovieCard from "../MusicCard/MusicCard";
import "./CardGrid.css";

const CardGrid = ({
  musics,
  setPlayIndex,
  playIndex,
  auth,
  paginationInfo,
  queryTitle,
  setQueryTitle,
  loadMore,
}) => {
  const list = musics.map((movie, index) => (
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
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Cari lagu favorite anda disini..."
          value={queryTitle}
          onChange={(e) => setQueryTitle(e.target.value)}
        />
        <button type="submit" className="searchButton">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="movie-list">{list} </div>
      {paginationInfo.totalData <= musics.length ? null : (
        <button
          onClick={() => {
            loadMore(paginationInfo.currentPage + 1);
          }}
          className="btn-loadmore"
        >
          LOAD MORE
        </button>
      )}
    </div>
  );
};

export default CardGrid;
