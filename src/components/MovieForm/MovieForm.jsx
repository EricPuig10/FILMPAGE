import { useState, useEffect } from "react";

export const MovieForm = (props) => {
  const [newMovie, setNewMovie] = useState(props.movieToEdit);
  const [isEditMode] = useState(props.isEditMode);
  const [isPreview, setIsPreview] = useState(props.isPreview);
  console.log(isPreview);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (newMovie.title.length > 0) {
      !isEditMode ? props.addNewMovie(newMovie) : props.updateMovie(newMovie);
    }

    resetInputsForm(e);
  };

  //Extract to method

  const resetInputsForm = (e) => {
    setNewMovie({
      newMovie: {
        id: "",
        title: "",
        yearOfProd: "",
        imgUrl: " ",
        sinopsis: "",
        isFav: false,
      },
    });
  };

  const onInputChange = (e) => {
    setIsPreview(true);
    const name = e.target.name;
    const value = e.target.value;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.showForm();
    }
  };

  useEffect(
    () => {
      document.body.addEventListener("keydown", closeOnEscapeKeyDown);
      return function cleanup() {
        document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
      };
    },
    // eslint-disable-next-line
    []
  );
  return (
    <div>
      <div id="addNewFilm" onClick={() => props.showForm()}></div>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div className="formCont">
            <div className="inputsCont">
              <input
                onChange={onInputChange}
                value={newMovie.imgUrl}
                name="imgUrl"
                id="inputMovieUrl"
                type="url"
                placeholder="Paste img url here..."
              ></input>
              <input
                onChange={onInputChange}
                value={newMovie.title}
                name="title"
                id="inputMovieTitle"
                type="text"
                placeholder="Title..."
              ></input>
              <input
                onChange={onInputChange}
                value={newMovie.sinopsis}
                name="sinopsis"
                id="inputSinopsis"
                type="text"
                placeholder="Add sinopsis..."
              ></input>
              <div className="yearAndSubmitCont">
                <input
                  onChange={onInputChange}
                  value={newMovie.yearOfProd}
                  name="yearOfProd"
                  id="inputMovieYear"
                  type="text"
                  pattern="[0-9]{4}"
                  placeholder="YearOfProd..."
                ></input>
                {isEditMode ? (
                  <button type="submit" className="submitBtn">
                    <i className="fa-solid fa-pen-to-square fa-xl"></i>
                  </button>
                ) : (
                  <button type="submit" className="submitBtn">
                    <i className="fa-solid fa-plus fa-xl"></i>
                  </button>
                )}
              </div>
            </div>

            {isPreview ? (
              <div className="preview">
                <img src={newMovie.imgUrl} alt="" />
              </div>
            ) : (
              <div className="preview"></div>
            )}
            <div className="closeCont">
              <button onClick={() => props.showForm()} className="closeBtn">
                <i className="fa-solid fa-xmark fa-xl"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
