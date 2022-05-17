import { Component } from "react";

export class MovieCard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let movie= this.props.movie;
        return <div id={movie.id} className="filmCard">
        <div className="photoFilmCont"> 
            <img className="photoFilm"  src={movie.imgUrl} alt="photoFilm"/> 
            <p className="yearOfProduction">{movie.yearOfProd}</p>
        </div>
    
        
        <div className="infoFilm">
            <h2 className="titleFilm">{movie.title}</h2>
            <button className="butFav" >{movie.fav}</button>
            <button className="butEdit" onClick={()=>this.props.editMovie(movie.id)}>  <i className="fa-solid fa-pen-to-square fa-lg"></i></button>     
            <button onClick={() => this.props.deleteMovie(movie.id)} className="deleteBtn"><i className="fa-solid fa-trash-can fa-lg"></i></button>
        </div>
        
    </div>
    }
}