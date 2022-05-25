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
          <button className="navBut">Home</button>
        </div>

        <div className="inputCont">
          <input className="searchFilm" placeholder="Search..." type="text" />
        </div>

        <div className="userZone">
          <button className="logInBut">Log In</button>
        </div>
      </div>
    </nav>
  );
};
