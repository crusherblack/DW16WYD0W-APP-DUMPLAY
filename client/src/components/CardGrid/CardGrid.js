import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import MovieCard from "../MusicCard/MusicCard";
import "./CardGrid.css";

const CardGrid = ({
  musics,
  title,
  setPlayIndex,
  playIndex,
  auth,
  setPageNow,
  pageNow,
  paginationInfo,
  musicLoading,
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
      <div className="movie-type">
        <p> {title} </p>
      </div>
      <div className="movie-list">{list} </div>
      {paginationInfo.totalData <= musics.length ? null : (
        <button
          onClick={() => {
            loadMore(paginationInfo.currentPage + 1);
          }}
          className="btn-loadmore"
        >
          {musicLoading ? "LOAD MORE..." : "LOAD MORE"}
        </button>
      )}
    </div>
  );
};

export default CardGrid;
