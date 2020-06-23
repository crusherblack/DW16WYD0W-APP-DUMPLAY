import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import MovieGrid from "../../components/MovieGrid/MovieGrid";

import "../css/Movie.css";

import { connect } from "react-redux";
import {
  getFilmsAll,
  getFilmsTVSeries,
  getFilmsMovies,
} from "../../redux/actions/film";

import PropTypes from "prop-types";

const ListMovie = ({
  getFilmsAll,

  films: { filmsAll, loading },
  match,
}) => {
  const limit = 999;
  let category = "";

  useEffect(() => {
    getFilmsAll(category, limit);
  }, [getFilmsAll]);

  const handleFilter = (e) => {
    if (e.target.value == "tv") {
      category = 1;
      getFilmsAll(category, limit);
    } else if (e.target.value == "movies") {
      category = 2;
      getFilmsAll(category, limit);
    } else {
      getFilmsAll(category, limit);
    }
  };

  let history = useHistory();

  const openAddMovie = () => {
    history.push("/add-movie");
  };

  return (
    <div className="list-movie">
      <div className="baris-category">
        <h1>List Movie</h1>
        <select
          name=""
          id=""
          className="select-category"
          onChange={(e) => handleFilter(e)}
        >
          <option value={""}>Category</option>
          <option value={"tv"}>TV Series</option>
          <option value={"movies"}>Movies</option>
        </select>
        <button className="btn-add-film" onClick={() => openAddMovie()}>
          Add Film
        </button>
      </div>
      <MovieGrid title="All Films" films={filmsAll} />
    </div>
  );
};

ListMovie.propTypes = {
  getFilmsAll: PropTypes.func.isRequired,
  films: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.film,
});

export default connect(mapStateToProps, {
  getFilmsAll,
})(ListMovie);
