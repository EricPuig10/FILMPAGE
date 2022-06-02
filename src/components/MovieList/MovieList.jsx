import React, { useEffect, useState } from "react";
import { movieServices } from "../../services/movieServices";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieForm } from "../MovieForm/MovieForm";
import Loader from "../Loader/Loader";
import { TrendingFilms } from "../TrendingFilms/TrendingFilms";
import { NavBar } from "../NavBar/NavBar";
import Loader2 from "../Loader2/Loader2";

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
  const [favList, setFavList] = useState([]);
  const [isPreview, setIsPreview] = useState(false)

  useEffect(() => {
    getAllMovies();
    showFavList();
  }, []);

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
    setIsPreview(false)

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
    setIsPreview(true)
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

  const setFavorite = (newMovie) => {
    let movie = newMovie;

    if (movie.isFav === false) movie.isFav = true;
    else movie.isFav = false;

    movieServices.updateMovie(movie.id, movie).then((res) => {
      if (res) getAllMovies();
    });

    addToSlider(movie);
  };

  const addToSlider = (newMovie) => {
    let movie = newMovie;

    if (movie.isFav === true) {
      favList.push(movie);
      showFavList();
    } else {
      let favIndex = favList.findIndex((movie) => movie.id === newMovie.id);
      favList.splice(favIndex, 1);
      showFavList();
    }

    showFavList();
  };

  const showFavList = () => {
    setIsLoading(true)
    movieServices.getFavMovies().then((res) => {
      setFavList(res);
      setIsLoading(false)
    });
  };


  
  return (
    <section>
      <NavBar />


{isLoading ? (<Loader/>) : 
      (<TrendingFilms favList={favList} isLoading={isLoading} />)}

      {isShowForm ? (
        ""
      ) : (
        <button type="button" onClick={showForm} className="addMovieTitle">
         <i class="fa-solid fa-plus"></i>
        </button>
      )}

      {isShowForm ? (
        <MovieForm
          addNewMovie={addNewMovie}
          movieToEdit={movieToEdit}
          updateMovie={updateMovie}
          isEditMode={isEditMode}
          isShowForm={isShowForm}
          showForm={showForm}
          isPreview={isPreview}
        />
      ) : (
        ""
      )}

      {isLoading ? (
        <Loader2 />
      ) : (
        <div id="containerListFilms">
          {movies.map((movie, key) => (
            <MovieCard
              key={key}
              movie={movie}
              deleteMovie={deleteMovie}
              editMovie={editMovie}
              setFavorite={setFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
};
