import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { InfoFilm } from "../pages/InfoFilm";
import { LogIn } from "../pages/LogIn";

export default function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/movie-info/:id" element={<InfoFilm />} />
      </Routes>
    </BrowserRouter>
  );
}
