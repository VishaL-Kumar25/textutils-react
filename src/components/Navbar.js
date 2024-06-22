// Navbar.js
import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.name || "React App"}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" to="#">
                {props.title || "About"}
              </a>
            </li> */}
          </ul>
          <div className="form-check form-switch mx-1">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleBtn}
              role="switch"
              id="dark"
              name="dark"
            />
            <label className="form-check-label" htmlFor="dark">
              {props.modeText}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, name: PropTypes.string };

export default Navbar;
