import { NavBar } from "../components/NavBar/NavBar";
import { Link } from "react-router-dom";

export const LogIn = () => {
  return (
    <div>
      <NavBar />
      <div className="border">
        <form /*action="action_page.php" */ method="post">
          <div className="imgcontainer">
            <img
              src="https://reclamos.asep.gob.pa/solicitudes/Resources/user2.png"
              alt="Avatar"
              className="avatar"
            />
          </div>

          <div className="container">
            <label>
              <b>Username</b>
            </label>
            <input
              className="inputlogin"
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label>
              <b>Password</b>
            </label>
            <input
              className="inputlogin"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button className="buttonlogin" type="submit">Login</button>
            <label>
              <input className="inputlogin" type="checkbox" name="remember" />{" "}
              Remember me
            </label>
          </div>

          <div className="container">
            <Link to="/">
            <button className="buttonlogin" type="button" id="cancelbtn">
              Cancel
            </button>
            </Link>
            <span className="psw">
              Forgot password?
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
