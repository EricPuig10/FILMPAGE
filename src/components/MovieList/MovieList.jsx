import { Component } from "react";
import { createUuid } from "../../utils/createUuid";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieForm } from "../MovieForm/MovieForm";
import { movieServices } from "../../services/movieServices";




export class MovieList extends Component {
    constructor(){
        super();
        this.state = {
          movies:[],
          showForm: false,
          movieToEdit:{},
          isEditMode: false,
        }
      }
      
    
    componentDidMount(){
        movieServices.getAllMovies().then(res => {
            console.log(res)
            this.setState({movies: res})
        })       
    }
    
    showForm = () => {
    if(this.state.showForm) this.setState({showForm:false})
    else this.setState ({showForm:true})
    this.resetInputsForm()
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
    this.setState({movieToEdit})  
    this.setState({isEditMode:true})      
    }
    
    
    updateMovie = (newMovie) => {
    console.log(newMovie)
    let newMoviesState = this.state.movies
    let movieToEditIndex = newMoviesState.findIndex(movie => movie.id === newMovie.id)
    newMoviesState[movieToEditIndex] = newMovie
    this.setState({movies: newMoviesState})
    console.log(this.state.movies) 
    this.showForm()
    }
    
    
    resetInputsForm = (e) => {
    this.setState({newMovie:{id: '', title:'', yearOfProd:'', imgUrl:'', fav: ''}})
    };
    render() {
        return <section>
        {this.state.showForm?
        <button  type="button" onClick={this.showForm} className="addMovieTitle"> Back <i className="fa-solid fa-caret-up"></i> </button>
        : <button  type="button" onClick={this.showForm} className="addMovieTitle">Add Movie <i className="fa-solid fa-caret-down"></i></button> 
        }
        {this.state.showForm?
            <MovieForm addNewMovie={this.addNewMovie} movieToEdit={this.state.movieToEdit} updateMovie={this.updateMovie} isEditMode={this.state.isEditMode} />
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
