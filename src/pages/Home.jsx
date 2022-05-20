import { Component } from "react";
import { MovieList } from "../components/MovieList/MovieList";
import { NavBar } from "../components/NavBar/NavBar";
import { TrendingFilms } from "../components/TrendingFilms/TrendingFilms";

export class Home extends Component {
    render() {
        return (
            <div>
              <NavBar/>
              <TrendingFilms/>
              <MovieList />
            </div>
          );
    }
}