import { Component } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { MovieInfo } from "../components/MovieInfo/MovieInfo";


export class UnchartedFilm extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <MovieInfo/>
            </div>
            
          );
    }
}