import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import useStyles from "./styles";

import { Actors, MovieInfo, Movies, NavBar, Profile } from "./";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/movie/:id" element={<MovieInfo />}></Route>
          <Route path="/actors/:id" element={<Actors />}></Route>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
