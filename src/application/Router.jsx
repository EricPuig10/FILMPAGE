import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { MovieInfo } from '../components/MovieInfo/MovieInfo';
import { Home } from '../pages/Home';
import { InfoFilm } from '../pages/InfoFilm';
import { LogIn } from '../pages/LogIn';



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/FILMPAGE" element={<Home/>}/>
            <Route path="/LogIn" element={<LogIn/>}/>
            {/* <Route path="/movie/:id" element={<Movie/>}/>  */}
            <Route path="/movie-info/:movie.id" element={<InfoFilm/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}
