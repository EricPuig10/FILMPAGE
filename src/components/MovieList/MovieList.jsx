import React, { useEffect, useState } from "react";
import { movieServices } from "../../services/movieServices";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieForm } from "../MovieForm/MovieForm";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState({
    title: "",
    id: "",
    imgUrl: "",
    yearOfProd: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  //canviem componentdidmount x useeffect
  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = () => {
    movieServices.getAllMovies().then((res) => {
      setMovies(res);
    });
  };

  const showForm = () => {
    if (isShowForm) setIsShowForm(false);
    else setIsShowForm(true);
    resetInputsForm();
  };

  const addNewMovie = (data) => {
    // data.id = createUuid();
    // this.setState({movies:[...this.state.movies, data]});
    movieServices.addMovie(data).then((res) => {
      setMovies([...movies, res]);
    });
    setIsShowForm(false);
  };

  const deleteMovie = (id) => {
    let movieToDelete = movies.filter((movie) => movie.id === id);
    let deleteConfirmed = window.confirm(
      `Really remove ${movieToDelete[0].title} from the list?`
    );
    if (!deleteConfirmed) return;
    let filterMovies = movies.filter((movie) => movie.id !== id);
    console.log(filterMovies);

    movieServices.deleteMovie(parseInt(id)).then((res) => {
      if (res.id === id) setMovies(filterMovies);
    });
  };

  const editMovie = (id) => {
    showForm();
    let movieToEdit = movies.find((movie) => movie.id === id);
    setMovieToEdit(movieToEdit);
    setIsEditMode(true);
  };

  const updateMovie = (newMovie) => {
    movieServices.updateMovie(newMovie.id, newMovie).then((res) => {

      let movieToEdit = movies.map(movie => movie.id === newMovie.id ? newMovie : movie)
      
      // let movieToEditIndex = newMoviesState.findIndex(
      //   (movie) => movie.id === newMovie.id
      // );

      // newMoviesState[movieToEditIndex] = res;
      setMovies(movieToEdit);
    });

    showForm();
  };

  const resetInputsForm = (e) => {
    setMovieToEdit({ id: "", title: "", yearOfProd: "", imgUrl: "" });
  };

  return (
    <section>
      {isShowForm ? (
        <button type="button" onClick={showForm} className="addMovieTitle">
          {" "}
          Back <i className="fa-solid fa-caret-up"></i>{" "}
        </button>
      ) : (
        <button type="button" onClick={showForm} className="addMovieTitle">
          Add Movie <i className="fa-solid fa-caret-down"></i>
        </button>
      )}
      {isShowForm ? (
        <MovieForm
          addNewMovie={addNewMovie}
          movieToEdit={movieToEdit}
          updateMovie={updateMovie}
          isEditMode={isEditMode}
        />
      ) : (
        ""
      )}

      <div id="containerListFilms">
        {movies.map((movie, key) => (
          <MovieCard
            // to={`/movie-info/${movie.id}`}
            key={key}
            movie={movie}
            deleteMovie={deleteMovie}
            editMovie={editMovie}
          />
        ))}
      </div>
    </section>
  );
};

