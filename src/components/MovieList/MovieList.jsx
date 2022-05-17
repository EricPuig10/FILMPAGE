import { Component } from "react";
import { createUuid } from "../../utils/createUuid";
import { ButtonRenderForm } from "../ButtonRenderForm.jsx/ButtonRenderForm";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieForm } from "../MovieForm/MovieForm";




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
                    title: "Fast&Furious7",
                    yearOfProd: "2015",
                    fav: <i className="fa-solid fa-star fa-lg"></i>,
                },
                {
                    id: 5,
                    imgUrl: "https://static.filmin.es/images/media/15662/1/poster_0_3_338x507.png",
                    title: "Ahora Me Ves 2",
                    yearOfProd: "2016",
                    fav:<i className="fa-solid fa-star fa-lg"></i>, 
                },
                {
                    id: 6,
                    imgUrl:"https://static.wixstatic.com/media/843f49_c0c89a5c286846db82c9eb2447e90f36~mv2.jpg/v1/fill/w_924,h_1280,al_c,q_85/843f49_c0c89a5c286846db82c9eb2447e90f36~mv2.jpg",
                    title: "Spenser Confidential",
                    yearOfProd: "2020",
                    fav: <i className="fa-solid fa-star fa-lg"></i>,
                },
                {
                    id: 7,
                    imgUrl:"https://m.media-amazon.com/images/M/MV5BMDU4YzE5NDgtMDAyNy00NjUwLTlmMjMtZGNhODRkMmE2MDMwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_FMjpg_UX1000_.jpg",
                    title: "Torrente 4",
                    yearOfProd: "2011",
                    fav: <i className="fa-solid fa-star fa-lg"></i>,
                },
                {
                    id: 8,
                    imgUrl:"https://www.mubis.es/media/covers/1538/2136/celda-211-portada-l_cover.jpg",
                    title: "Celda 211",
                    yearOfProd: "2009",
                    fav: <i className="fa-solid fa-star fa-lg"></i>,
                },
            ],
            showForm: false,
        }
    }   

 
    showForm = () => {
        if(this.state.showForm) this.setState({showForm:false})
        else this.setState ({showForm:true})
    }

    addNewMovie = (data) => {
        data.id = createUuid();
        console.log(data);
        this.setState({movies:[...this.state.movies, data]});
        this.setState({showForm: false})
    }

    deleteMovie = (id) => {
        let movieToDelete = this.state.movies.filter(movie => movie.id === id);
        let deleteConfirmed = window.confirm((`Really remove ${movieToDelete[0].title} from the list?`));
        if (!deleteConfirmed) return;
        let filterMovies = this.state.movies.filter(movie => movie.id !== id);
        this.setState({movies: filterMovies});
        console.log(filterMovies)    
        };
    
    editMovie = (id) =>{
        this.showForm()
        let movieToEdit = this.state.movies.find(movie => movie.id === id);
        console.log(movieToEdit)
        return movieToEdit
        


        // let editedMovieUrl = MovieForm.inputMovieUrl.value
        // editedMovieUrl = movieToEdit.imgUrl
        
    }


    render() {
        return <section>
        {this.state.showForm?
        <button  type="button" onClick={this.showForm} className="addMovieTitle"> Back <i className="fa-solid fa-caret-up"></i> </button>
        : <button  type="button" onClick={this.showForm} className="addMovieTitle">Add Movie <i className="fa-solid fa-caret-down"></i></button> 
        }
        {this.state.showForm?
            <MovieForm addNewMovie={this.addNewMovie}/>
        :""
        }
            
        <div id="containerListFilms">
            {this.state.movies.map((movie, key) => (
            < MovieCard key = {key} movie = {movie} deleteMovie={this.deleteMovie} editMovie={this.editMovie} />
        ))}
        </div>

        
        
        </section>;
    
    }
    
}
