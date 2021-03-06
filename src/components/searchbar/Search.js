import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function SearchBar({ placeholder, data }) {
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} />
            </div>
            <div className="searchIcon">
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    );
}

export default SearchBar;
