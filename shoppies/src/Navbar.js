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
    </nav>
  )
}