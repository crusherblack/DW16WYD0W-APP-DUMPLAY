import React from "react";
import { useHistory } from "react-router-dom";
import "./MusicCard.css";
import sampleImg from "../../img/musicimg/music1.png";

const MusicCard = ({
  movie: {
    id,
    title,
    year,
    artis: { name },
    category,
  },
}) => {
  let history = useHistory();

  return (
    <div className="card-backround">
      <div>
        <img
          className="card"
          src={sampleImg}
          onClick={() => history.push(`/detail/${id}`)}
          style={{ height: "auto" }}
        />
        <span className="movie-title">{title}</span>
        <span className="movie-kanan">{year}</span>
        <span className="movie-artis">{name}</span>
      </div>
    </div>
  );
};

export default MusicCard;
