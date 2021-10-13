import React from "react";
import landingtop from "./landingpagetop.jpg";
import "./Homepage.css";
import { Link } from "react-router-dom";
export default function Homepage() {
    return (
        <div cls="container">
            <img src={landingtop} alt="landingtop" className="landingtop" />
            <Link to="./login">
                <button class="btn-homepage">Mulai!</button>
            </Link>
        </div>
    );
}
