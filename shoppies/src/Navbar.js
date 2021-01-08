import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const movieCount = props.movie.reduce(
    (total, movie) => total + movie.quantity,
    0
  );

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        The Shoppies Award
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink exact
          activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact
          activeClassName="active" to="/search">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies"
          className="nav-item nav-movies btn
          btn-accent">
            Movies ({movieCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}