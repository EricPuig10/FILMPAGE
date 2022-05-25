import { Link } from "react-router-dom";

export const MovieCard = (props) => {
  const movie = props.movie;
  let to = props.to


  return (
    <div id={movie.id} className="filmCard">
      <div className="photoFilmCont">
        <Link to={`/movie-info/${movie.id}`}> <img className="photoFilm" src={movie.imgUrl} alt="photoFilm" /> </Link>
        <p className="yearOfProduction">{movie.yearOfProd}</p>
      </div>

      <div className="infoFilm">
        <h2 className="titleFilm">{movie.title}</h2>
        <button className="butFav">
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
