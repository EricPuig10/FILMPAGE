import { Link } from "react-router-dom";
import React from "react";
// import { movieServices } from "../../services/movieServices";
// import { useState } from "react";

export const NavBar = (props) => {
  //   const [search, setSearch] = useState("")
  //   const [isSearchMode, setIsSearchMode] = useState(false)
  //   const [results, setResults] = useState("")

  //   const onSubmitHandler = (e) => {
  //     e.preventDefault();

  //   };

  //   const onInputChange = (e) => {

  //     const value = e.target.value;

  //     setSearch(value);
  //     console.log(value);
  //     if (value !== '') movieServices.getSearch(value).then(res => {
  //         if (res) setResults(res)
  //     });
  //     else setResults ([]);
  // }

  return (
    <nav>
      <div className="navBar">
        <div className="title">
          <Link to="/">
            <h1>
              FILM<span className="hub">HUB</span>
            </h1>
          </Link>
        </div>

        <div className="inputCont">
          {/* <form onSubmit={onSubmitHandler} > */}
          <input
            /*onChange={onInputChange()} value={search} name="search"*/ className="searchFilm"
            placeholder="Search..."
            type="text"
          />
          {/* <button type="submit">Search</button> */}
          {/* </form> */}
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
