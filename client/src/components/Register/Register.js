import React, { useState } from "react";

import Modal from "../Modal/Modal";
import { handleRegister } from "../../redux/actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Register = ({
  showModalRegister,
  showModalLogin,
  modalRegister,
  handleRegister,
  auth: { error, loading },
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    gender: "",
    phone: "",
    address: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { email, password, fullName, gender, phone, address } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    handleRegister(
      email,
      password,
      fullName,
      gender,
      phone,
      address,
      showModalRegister
    );
  };

  return (
    <div>
      {modalRegister ? (
        <div onClick={() => showModalRegister()} className="back-drop" />
      ) : null}

      <Modal
        className="modal"
        show={modalRegister}
        close={() => showModalRegister()}
      >
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 style={{ marginBottom: "20px" }}>REGISTER</h1>
          {error === null || loading ? (
            ""
          ) : (
            <p style={{ textTransform: "capitalize", margin: "0 0" }}>
              {error}
            </p>
          )}
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="custom-input"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="fullName"
              value={fullName}
              name="fullName"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <select
              name="gender"
              className="custom-select"
              onChange={(e) => onChange(e)}
              style={{
                marginTop: "0px",
              }}
            >
              <option value="" holder="true">
                Select Gender
              </option>
              <option value="Male" selected={gender == "Male"}>
                Male
              </option>
              <option value="Famale" selected={gender == "Famale"}>
                Famale
              </option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Phone"
              value={phone}
              name="phone"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Address"
              value={address}
              name="address"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group" style={{ marginTop: "50px" }}>
            <button className="button" type="submit">
              Register
            </button>
          </div>
        </form>
        <p style={{ color: "#B1B1B1", fontSize: "18px" }}>
          Already have an account ? Klik{" "}
          <span
            style={{ fontWeight: "900", cursor: "pointer" }}
            onClick={() => showModalLogin()}
          >
            Here
          </span>
        </p>
      </Modal>
    </div>
  );
};

Register.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { handleRegister })(Register);
