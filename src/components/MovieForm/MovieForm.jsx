import {  useState } from "react";

export const MovieForm = (props) => {
  const [newMovie, setNewMovie] = useState(props.movieToEdit);
  const [isEditMode] = useState(props.isEditMode);
  

  // useEffect(() => {
  //   showPreview();
  // }, []);

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
      newMovie: { id: "", title: "", yearOfProd: "", imgUrl: "", sinopsis: "" },
    });
  };

  const onInputChange = (e) => {
    // props.setIsPreview(true)
    console.log(newMovie.imgUrl.length)
    const name = e.target.name;
    const value = e.target.value;
    setNewMovie({ ...newMovie, [name]: value });
    
  };




  return (
    <div id="addNewFilm">
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
          {props.isPreview ? (
            <div className="preview">
            
          </div>
          ) : (
            <div className="preview">
              <img src={newMovie.imgUrl} alt="preview" />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
