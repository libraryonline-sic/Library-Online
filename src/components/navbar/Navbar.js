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
                        <h1>Petal</h1>
                    </container>
                    <ul>
                        <li>
                            <Link to="/" className="link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/discuss" className="link">
                                Discuss
                            </Link>
                        </li>
                        <li>
                            <Link to="/perpus" className="link">
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
