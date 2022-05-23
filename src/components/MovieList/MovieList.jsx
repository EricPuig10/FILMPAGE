import { Component } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieForm } from "../MovieForm/MovieForm";
import { movieServices } from "../../services/movieServices";




export class MovieList extends Component {
    constructor(){
        super();
        this.state = {
          movies:[],
          showForm: false,
          movieToEdit:{title:"", id:"", imgUrl:"", yearOfProd:""},
          isEditMode: false,
        }
      }
      
    
    componentDidMount=() => {
        movieServices.getAllMovies().then(res => {
            this.setState({movies: res})
            console.log(this.state.movies)  
        })
             
        
    }



    
    showForm = () => {
    if(this.state.showForm) this.setState({showForm:false})
    else this.setState ({showForm:true})
    this.resetInputsForm()
    }
    
    addNewMovie = (data) => {
    // data.id = createUuid();
    // this.setState({movies:[...this.state.movies, data]});
    movieServices.addMovie(data).then(res => 
    {this.setState({movies: [...this.state.movies, res]})})
    this.setState({showForm: false}) 
    }
    
    deleteMovie = (id) => {
    let movieToDelete = this.state.movies.filter(movie => movie.id === id);
    let deleteConfirmed = window.confirm((`Really remove ${movieToDelete[0].title} from the list?`));
    if (!deleteConfirmed) return;
    let filterMovies = this.state.movies.filter(movie => movie.id !== id);
    console.log(filterMovies)

    movieServices.deleteMovie(id).then(res => {
        if (res.id===id)
        this.setState({movies:filterMovies})
    })    
    };
    
    editMovie = (id) =>{
    this.showForm()
    let movieToEdit = this.state.movies.find(movie => movie.id === id);
    this.setState({movieToEdit})  
    this.setState({isEditMode:true})      
    }
    
    
    updateMovie = (newMovie) => {

    let newMoviesState = this.state.movies
    let movieToEditIndex = newMoviesState.findIndex(movie => movie.id === newMovie.id)
    
    movieServices.updateMovie(newMovie.id, newMovie).then(res => {
        newMoviesState[movieToEditIndex] = res
        this.setState ({movies: newMoviesState})
    })

    this.showForm()
    }
    
    
    resetInputsForm = (e) => {
    this.setState({newMovie:{id: '', title:'', yearOfProd:'', imgUrl:'', fav: ''}})
    };
    render() { console.log(this.state.movies)
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
            < MovieCard to={`/movie-info/${movie.id}`}  key = {key} movie = {movie} deleteMovie={this.deleteMovie} editMovie={this.editMovie} />
        ))}
        </div>

        
        
        </section>;
    
    }
    
}
