import { Link } from "react-router-dom";
import { useState } from "react";

export const MovieCard = (props) => {
  const [isFav, setIsFav] = useState(false);

  const movie = props.movie;

  const showFav = () => {
    if (isFav) setIsFav(false);
    else setIsFav(true);
    
  };


  return (
    <div id={movie.id} className="filmCard">
      <div className="photoFilmCont">
        <Link to={`/movie-info/${movie.id}`}> <img className="photoFilm" src={movie.imgUrl} alt="photoFilm" /> </Link>
        <p className="yearOfProduction">{movie.yearOfProd}</p>
      </div>

      <div className="infoFilm">
        <h2 className="titleFilm">{movie.title}</h2>
        <button onClick={showFav} className="butFav">
          <i className="fa-solid fa-star fa-lg"></i>
        </button>
        <button className="butEdit" onClick={() => props.editMovie(movie.id)}>
          <a className="butEdit" href="#root">
            <i className="fa-solid fa-pen-to-square fa-lg"></i>
          </a>
        </button>
        <button
          onClick={() => props.deleteMovie(movie.id)}
          className="deleteBtn"
        >
          <i className="fa-solid fa-trash-can fa-lg"></i>
        </button>
      </div>
    </div>
  );
};
