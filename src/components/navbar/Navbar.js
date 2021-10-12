import React from "react";
import { Link } from "react-router-dom";
import petal from "./clover.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div>
        <nav>
          <container className="brand">
            <img src={petal} className="petal" alt="Logo" />
            <h1 className="brandname">Petal</h1>
          </container>
          <ul>
            <li>
              <Link to="/homepage" className="linkpages">
                Home
              </Link>
            </li>
            <li>
              <Link to="/discuss" className="linkpages">
                Discuss
              </Link>
            </li>
            <li>
              <Link to="/perpus" className="linkpages">
                Book
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
