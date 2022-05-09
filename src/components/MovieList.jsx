import { Component } from "react";

export class MovieList extends Component {
    constructor(){
        super();
        this.state = {
            movies:[
                {
                    id: 1,
                    imgUrl: "https://assets-prd.ignimgs.com/2022/01/13/uncharted-poster-full-1642086040683.jpg",
                    title: "Uncharted",
                    yearOfProd: "2022",
                    fav:<i className="fa-solid fa-star fa-lg"></i>, 
                },
                {
                    id: 2,
                    imgUrl:"http://1.bp.blogspot.com/-NtRTeSqmbTQ/UczKvMeQ79I/AAAAAAAAC3Q/ir70hx5h9vc/s1600/image.jpeg",
                    title: "In Time",
                    yearOfProd: "2011",
                    fav: <i className="fa-solid fa-star fa-lg"></i>,
                },
                {
                    id: 3,
                    imgUrl:"https://m.media-amazon.com/images/M/MV5BZmMzYjg4ZmQtMjc2Yy00ZWQ4LWE0M2ItMzNmYTFlMDJlNzUyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                    title: "Bajo Cero",
                    yearOfProd: "2021",
                    fav: <i className="fa-solid fa-star fa-lg"></i>,
                },
                {
                    id: 4,
                    imgUrl:"https://es.web.img3.acsta.net/pictures/15/03/09/12/33/510089.jpg",
                    title: "Fast & Furious 7",
                    yearOfProd: "2015",
                    fav: <i className="fa-solid fa-star fa-lg"></i>,
                },
                {
                    id: 1,
                    imgUrl: "https://assets-prd.ignimgs.com/2022/01/13/uncharted-poster-full-1642086040683.jpg",
                    title: "Uncharted",
                    yearOfProd: "2022",
                    fav:<i className="fa-solid fa-star fa-lg"></i>, 
                },
                {
                    id: 2,
                    imgUrl:"http://1.bp.blogspot.com/-NtRTeSqmbTQ/UczKvMeQ79I/AAAAAAAAC3Q/ir70hx5h9vc/s1600/image.jpeg",
                    title: "In Time",
                    yearOfProd: "2011",
                    fav: <i className="fa-solid fa-star fa-lg"></i>,
                },
                {
                    id: 3,
                    imgUrl:"https://m.media-amazon.com/images/M/MV5BZmMzYjg4ZmQtMjc2Yy00ZWQ4LWE0M2ItMzNmYTFlMDJlNzUyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
                    title: "Bajo Cero",
                    yearOfProd: "2021",
                    fav: <i className="fa-solid fa-star fa-lg"></i>,
                },
                {
                    id: 4,
                    imgUrl:"https://es.web.img3.acsta.net/pictures/15/03/09/12/33/510089.jpg",
                    title: "Fast & Furious 7",
                    yearOfProd: "2015",
                    fav: <i className="fa-solid fa-star fa-lg"></i>,
                },
            ]
        };
    } 


    render() {
        return <section>
            <div id="containerListFilms">
                {this.state.movies.map((movie, key) => (
                <div id="{film.id}" className="filmCard">
                <div className="photoFilmCont"> 
                    <img className="photoFilm" src={movie.imgUrl} alt="photoFilm"/> 
                    <p className="yearOfProduction">{movie.yearOfProd}</p>
                </div>
            
                
                <div className="infoFilm">
                    <h2 className="titleFilm">{movie.title}</h2>
                    <button className="butFav">{movie.fav}</button>     
                </div>
            </div>
            ))}
            </div>
        </section>;
    }
}
