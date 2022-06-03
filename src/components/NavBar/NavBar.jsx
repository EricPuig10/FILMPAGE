import { Link } from "react-router-dom";
import React from "react";

export const NavBar = (props) => {
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
          <input className="searchFilm" placeholder="Search..." type="text" />
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
