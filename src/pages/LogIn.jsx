import { Component } from "react";
import { NavBar } from "../components/NavBar/NavBar";

export class LogIn extends Component {
  render() {
    return (
      <body>
        <NavBar />
        <div className="LogInCont">
          <p>This is a Login Page</p>
        </div>
      </body>
    );
  }
}
