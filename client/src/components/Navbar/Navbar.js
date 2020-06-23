import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png";
import person from "../../img/person.jpg";
import ProfileDropdown from "../Profile/ProfileDropdown";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

const Navbar = ({
  showModalLogin,
  showModalRegister,
  auth: { isAuthenticated },
}) => {
  let history = useHistory();

  const [isProfileDropdown, setProfileDropdown] = useState(false);

  const showProfileDropdown = () => {
    setProfileDropdown(!isProfileDropdown);
  };

  const openHome = () => {
    history.push(`/`);
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/tv-series">TV Shows</Link>
      <Link to="/movies">Movies</Link>
      <div className="logo">
        <img
          src={logo}
          alt="dumbflix"
          style={{ cursor: "pointer" }}
          onClick={() => openHome()}
        />
      </div>

      {!isAuthenticated && (
        <div className="button-login-register">
          <button className="btn-light" onClick={() => showModalRegister()}>
            Register
          </button>
          <button className="btn-red" onClick={() => showModalLogin()}>
            Login
          </button>
        </div>
      )}
      {isAuthenticated && (
        <div className="profile">
          <img src={person} alt="" onClick={() => showProfileDropdown()} />
        </div>
      )}
      {isProfileDropdown && (
        <ProfileDropdown showProfileDropdown={showProfileDropdown} />
      )}
    </div>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Navbar);
