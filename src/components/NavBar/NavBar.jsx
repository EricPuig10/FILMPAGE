import { Link } from "react-router-dom";
import React from "react";
import { movieServices } from "../../services/movieServices";
import { useState } from "react";


export const NavBar = (/*MovieForm, addNewMovie, movieToEdit, updateMovie, isEditMode, isShowForm, showForm*/) => {
  // const [searchTerm, setSearchTerm] = useState("");
  // MovieForm={MovieForm}
  // addNewMovie={addNewMovie}
  // movieToEdit={movieToEdit}
  // updateMovie={updateMovie}
  // isEditMode={isEditMode}
  // isShowForm={isShowForm}




  return (
    <nav>
      <div className="navBar">
        <div className="title">
          <h1>
            FILM<span className="hub">HUB</span>
          </h1>
        </div>

        <div className="navButtons">
          <Link to="/">
            <button className="navBut">Home</button>
          </Link>
        </div>


        {/* {isShowForm ? (
        <div>
        <button type="button" onClick={showForm} className="addMovieTitle">
          Back <i className="fa-solid fa-caret-up"></i>{" "}
        </button>
        </div>
      ) : (
        <div>
        <button type="button" onClick={showForm} className="addMovieTitle">
          Add Movie <i className="fa-solid fa-caret-down"></i>
        </button>
        </div>
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
      )} */}

        <div className="inputCont">
          <input className="searchFilm" placeholder="Search..." type="text" />
          {/* {movieServices.map((movie, key) => {
            return (
              <div className="movie" key={key}>
                {movie.title}
              </div>
            );
          })} */}
        </div>

        <div className="userZone">
          <Link to="/LogIn">
            <button className="logInBut">LogIn</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
