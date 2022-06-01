// import React, { useState } from "react";

// export const Modal = (props) => {

// const [isOpen, setIsOpen] = useState(false)

// const [newMovie, setNewMovie] = useState();



// const onSubmitHandler = (e) => {
//   e.preventDefault();

//   if (newMovie.title.length > 0) {
//     !props.isEditMode ? props.addNewMovie(newMovie) : props.updateMovie(newMovie);
//   }

//   resetInputsForm(e);
// };



// const resetInputsForm = (e) => {
//   setNewMovie({
//     newMovie: {
//       id: "",
//       title: "",
//       yearOfProd: "",
//       imgUrl: "",
//       sinopsis: "",
//       isFav: false,
//     },
//   });
// };

// const onInputChange = (e) => {

//   const name = e.target.name;
//   const value = e.target.value;
//   setNewMovie({ ...newMovie, [name]: value });
// };


//   return (
//       <>
//     {props.isShowForm ? (
//         <button type="button" onClick={props.showForm} className="addMovieTitle">
//           Back <i className="fa-solid fa-caret-up"></i>{" "}
//         </button>
//       ) : (
//         <button type="button" onClick={props.showForm} className="addMovieTitle">
//           Add Movie <i className="fa-solid fa-caret-down"></i>
//         </button>
//       )}

//       {props.isShowForm ? (
//           <div id="addNewFilm">
//           <form onSubmit={onSubmitHandler}>
//             <div className="formCont">
//               <div className="inputsCont">
//                 <input
//                   onChange={onInputChange}
//                   value={newMovie.imgUrl}
//                   name="imgUrl"
//                   id="inputMovieUrl"
//                   type="url"
//                   placeholder="Paste img url here..."
//                 ></input>
//                 <input
//                   onChange={onInputChange}
//                   value={newMovie.title}
//                   name="title"
//                   id="inputMovieTitle"
//                   type="text"
//                   placeholder="Title..."
//                 ></input>
//                 <input
//                   onChange={onInputChange}
//                   value={newMovie.sinopsis}
//                   name="sinopsis"
//                   id="inputSinopsis"
//                   type="text"
//                   placeholder="Add sinopsis..."
//                 ></input>
//                 <div className="yearAndSubmitCont">
//                   <input
//                     onChange={onInputChange}
//                     value={newMovie.yearOfProd}
//                     name="yearOfProd"
//                     id="inputMovieYear"
//                     type="text"
//                     pattern="[0-9]{4}"
//                     placeholder="YearOfProd..."
//                   ></input>
//                   {props.isEditMode ? (
//                     <button type="submit" className="submitBtn">
//                       <i className="fa-solid fa-pen-to-square fa-xl"></i>
//                     </button>
//                   ) : (
//                     <button type="submit" className="submitBtn">
//                       <i className="fa-solid fa-plus fa-xl"></i>
//                     </button>
//                   )}
//                 </div>
//               </div>
//               <div className="preview">
//                 <img src={newMovie.imgUrl} alt="insert a valid img" />
//               </div>
//             </div>
//           </form>
//         </div>

//       ) : (
//         ""
//       )}
// </>




    
//   );
// };
