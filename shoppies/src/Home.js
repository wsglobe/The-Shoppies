import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>The Shoppies</h1>
        <p>Movie awards for entrepreneurs</p>
        <Link to="/search" className="btn btn-default">
          start searching
        </Link>
      </div>
    </div>
  );
}