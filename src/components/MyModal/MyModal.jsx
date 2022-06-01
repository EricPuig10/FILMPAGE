// import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
// import { CSSTransition } from "react-transition-group";
// import { useState } from "react";
// import "./MyModal.css";

// export const MyModal = (props) => {
//   const [newMovie, setNewMovie] = useState(props.movieToEdit);

//   const onSubmitHandler = (e) => {
//     e.preventDefault();

//     if (newMovie.title.length > 0) {
//       !props.isEditMode
//         ? props.addNewMovie(newMovie)
//         : props.updateMovie(newMovie);
//     }

//     resetInputsForm(e);
//   };

//   //Extract to method

//   const resetInputsForm = (e) => {
//     setNewMovie({
//       newMovie: {
//         id: "",
//         title: "",
//         yearOfProd: "",
//         imgUrl: "",
//         sinopsis: "",
//         isFav: false,
//       },
//     });
//   };

//   const onInputChange = (e) => {
//     // props.setIsPreview(true)
//     const name = e.target.name;
//     const value = e.target.value;
//     setNewMovie({ ...newMovie, [name]: value });
//   };
//   const closeOnEscapeKeyDown = (e) => {
//     if ((e.charCode || e.keyCode) === 27) {
//       props.onClose();
//     }
//   };

//   useEffect(() => {
//     document.body.addEventListener("keydown", closeOnEscapeKeyDown);
//     return function cleanup() {
//       document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
//     };
//   }, []);

//   return ReactDOM.createPortal(
//     <CSSTransition
//       in={props.show}
//       unmountOnExit
//       timeout={{ enter: 0, exit: 300 }}
//     >
//       <div className="modal" onClick={props.onClose}>
//         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//           <div className="modal-body">{props.children}</div>
//           <div id="addNewFilm">
//             <form onSubmit={onSubmitHandler}>
//               <div className="formCont">
//                 <div className="inputsCont">
//                   <input
//                     onChange={onInputChange}
//                     value={newMovie.imgUrl}
//                     name="imgUrl"
//                     id="inputMovieUrl"
//                     type="url"
//                     placeholder="Paste img url here..."
//                   ></input>
//                   <input
//                     onChange={onInputChange}
//                     value={newMovie.title}
//                     name="title"
//                     id="inputMovieTitle"
//                     type="text"
//                     placeholder="Title..."
//                   ></input>
//                   <input
//                     onChange={onInputChange}
//                     value={newMovie.sinopsis}
//                     name="sinopsis"
//                     id="inputSinopsis"
//                     type="text"
//                     placeholder="Add sinopsis..."
//                   ></input>
//                   <div className="yearAndSubmitCont">
//                     <input
//                       onChange={onInputChange}
//                       value={newMovie.yearOfProd}
//                       name="yearOfProd"
//                       id="inputMovieYear"
//                       type="text"
//                       pattern="[0-9]{4}"
//                       placeholder="YearOfProd..."
//                     ></input>
//                     {props.isEditMode ? (
//                       <button type="submit" className="submitBtn">
//                         <i className="fa-solid fa-pen-to-square fa-xl"></i>
//                       </button>
//                     ) : (
//                       <button type="submit" className="submitBtn">
//                         <i className="fa-solid fa-plus fa-xl"></i>
//                       </button>
//                     )}
//                   </div>
//                 </div>
//                 <div className="preview">
//                   <img src={newMovie.imgUrl} alt="insert a valid img" />
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="modal-footer">
//             <button onClick={props.onClose} className="button">
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </CSSTransition>,
//     document.getElementById("root")
//   );
// };
