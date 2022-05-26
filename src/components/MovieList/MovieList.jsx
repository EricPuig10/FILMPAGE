import React, { useEffect, useState } from "react";
import { movieServices } from "../../services/movieServices";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieForm } from "../MovieForm/MovieForm";
import Loader from "../Loader/Loader";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState({
    title: "",
    id: "",
    imgUrl: "",
    yearOfProd: "",
    sinopsis: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //canviem componentdidmount x useeffect
  useEffect(() => {
    getAllMovies();
  }, []);

  // const toggleLoading = () =>{

  // }

  const getAllMovies = () => {
    setIsLoading(true);
    movieServices.getAllMovies().then((res) => {
      setMovies(res);
      setIsLoading(false);
    });
  };

  const showForm = () => {
    if (isShowForm) setIsShowForm(false);
    else setIsShowForm(true);
    resetInputsForm();
    setIsEditMode(false);
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

  //opcio 2 de delete
  // const deleteMovie = (id) => {
  //   movieServices.deleteMovie(id).then((res) => {
  //     getAllMovies();
  //   });
  // };

  const editMovie = (id) => {
    showForm();
    let movieToEdit = movies.find((movie) => movie.id === id);
    setMovieToEdit(movieToEdit);
    setIsEditMode(true);
  };

  const updateMovie = (newMovie) => {
    movieServices.updateMovie(newMovie.id, newMovie).then((res) => {
      let movieToEdit = movies.map((movie) =>
        movie.id === newMovie.id ? newMovie : movie
      );

      // let movieToEditIndex = newMoviesState.findIndex(
      //   (movie) => movie.id === newMovie.id
      // );

      // newMoviesState[movieToEditIndex] = res;
      setMovies(movieToEdit);
    });

    showForm();
  };

  const resetInputsForm = (e) => {
    setMovieToEdit({
      id: "",
      title: "",
      yearOfProd: "",
      imgUrl: "",
      sinopsis: "",
    });
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
      {isLoading ? (
      
      <Loader/>
      
      ) : (<div id="containerListFilms">
      {movies.map((movie, key) => (
        <MovieCard
          key={key}
          movie={movie}
          deleteMovie={deleteMovie}
          editMovie={editMovie}
        />
      
      ))}
    </div>)}
    </section>
  );
};
