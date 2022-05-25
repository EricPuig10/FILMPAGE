export const MovieCard = (props) => {
  let movie = props.movie;

  return (
    <div id={movie.id} className="filmCard">
      <div className="photoFilmCont">
        <img className="photoFilm" src={movie.imgUrl} alt="photoFilm" />
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
