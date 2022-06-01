import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export const MovieCard = (props) => {
  const [movie, setMovie] = useState(props.movie);

  useEffect(() => {
    setMovie(props.movie);
  }, [props.movie]);

  const setFavorite = (movie) => {
    props.setFavorite(movie);
  };

  return (
    <div id={movie.id} className="filmCard">
      <div className="photoFilmCont">
        <Link to={`/movie-info/${movie.id}`}>
          <img className="photoFilm" src={movie.imgUrl} alt="photoFilm" />{" "}
        </Link>
        <p className="yearOfProduction">{movie.yearOfProd}</p>
      </div>

      <div className="infoFilm">
        <h2 className="titleFilm">{movie.title}</h2>
        <button
          onClick={() => setFavorite(movie)}
          className={`${!movie.isFav ? "butFav-unfav" : "butFav-fav"}`}
        >
          <i className="fa-solid fa-star fa-lg">{movie.isFav}</i>
        </button>
        <button className="butEdit" onClick={() => props.editMovie(movie.id)}>
          <button className="butEdit">
            <i className="fa-solid fa-pen-to-square fa-lg"></i>
          </button>
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
