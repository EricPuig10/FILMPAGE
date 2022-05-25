import React from "react";
import { MovieInfo } from "../components/MovieInfo/MovieInfo";
import { NavBar } from "../components/NavBar/NavBar";


export const InfoFilm = () => {
  return (
    <div>
      <NavBar />
      <MovieInfo />
    </div>
  );
};
