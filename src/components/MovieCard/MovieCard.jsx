import { Component } from "react";
import { Link } from "react-router-dom";

export class MovieCard extends Component {
    
    
    render(){
        let to = this.props.to;
        let movie= this.props.movie;

        
        return <div id={movie.id} className="filmCard">
         <div className="photoFilmCont"> 
         <Link to={to}><img className="photoFilm"  src={movie.imgUrl} alt="photoFilm"/> </Link>
            <p className="yearOfProduction">{movie.yearOfProd}</p>
        </div>
    
        
        <div className="infoFilm">
            <h2 className="titleFilm">{movie.title}</h2>
            <button className="butFav"><i className="fa-solid fa-star fa-lg"></i> </button>
            <button className="butEdit" onClick={()=>this.props.editMovie(movie.id)}>  <i className="fa-solid fa-pen-to-square fa-lg"></i></button>     
            <button onClick={() => this.props.deleteMovie(movie.id)} className="deleteBtn"><i className="fa-solid fa-trash-can fa-lg"></i></button>
        </div>
        
    </div>
    }
}