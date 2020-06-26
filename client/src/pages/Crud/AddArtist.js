import React, { useState } from "react";
import "../css/Movie.css";

import { add_Artist } from "../../redux/actions/music";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const AddArtist = ({ add_Artist, music: { alert } }) => {
  let history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    old: "",
    type: "",
    startCareer: "",
  });

  const onChange = (event) => {
    const updateForm = { ...formData };
    updateForm[event.target.name] =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    setFormData(updateForm);
  };

  const { name, old, startCareer } = formData;

  const cleanForm = () => {
    setFormData({
      name: "",
      old: "",
      type: "",
      startCareer: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    add_Artist(formData, cleanForm);
  };

  return (
    <div className="container">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="list-movie">
          <div style={{ textAlign: "center" }}>
            {alert && <h4 style={{ color: "#EE4622" }}>{alert}</h4>}
          </div>

          <h2>Add Artist</h2>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Artist Name"
              onChange={(e) => onChange(e)}
              value={name}
              name="name"
              required
            />
          </div>
          <div>
            <input
              type="number"
              className="custom-input"
              placeholder="Old"
              onChange={(e) => onChange(e)}
              value={old}
              name="old"
              required
            />
          </div>
          <div className="form-group">
            <select
              name="type"
              className="custom-select"
              onChange={(e) => {
                onChange(e);
              }}
              required
            >
              <option value="">Type</option>
              <option value="Solo">Solo</option>
              <option value="Group">Group</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="custom-input"
              placeholder="Start A Career"
              onChange={(e) => onChange(e)}
              value={startCareer}
              name="startCareer"
              required
            />
          </div>

          <div
            className="form-group"
            style={{
              textAlign: "center",
            }}
          >
            <button
              type="submit"
              className="btn-merah"
              style={{
                marginTop: "1em",
                maxWidth: "25rem",
                position: "relative",
              }}
            >
              Add Artist
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddArtist.propTypes = {
  add_Artist: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  music: state.music,
});

export default connect(mapStateToProps, { add_Artist })(AddArtist);
