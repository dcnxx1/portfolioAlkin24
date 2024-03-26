import "./styles.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav id="nav">
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>
        </div>
        <ul>
          <li>
            <a href="#over">Over</a>
          </li>
          <li>
            <a href="#projecten">Projecten</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#cv">CV</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
