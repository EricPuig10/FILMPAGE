import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <div className="navBar">
        <div className="title">
          <h1>
            FILM<span className="hub">HUB</span>
          </h1>
        </div>

        <div className="navButtons">
          <Link to ="/FILMPAGE"><button className="navBut">Home</button></Link>
        </div>

        <div className="inputCont">
          <input className="searchFilm" placeholder="Search..." type="text" />
        </div>

        <div className="userZone">
          <Link  to="/LogIn" ><button className="logInBut">LogIn</button></Link>
        </div>
      </div>
    </nav>
  );
};
