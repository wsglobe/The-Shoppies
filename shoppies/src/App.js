import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Search from "./Search.js";
import Movies from "./Movies.js";

export default function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/search">
            <Search />
        </Route>
        <Route exact path="/movies">
            <Movies />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);
}