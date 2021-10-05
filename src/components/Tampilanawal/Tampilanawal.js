import React from "react";
import komputer from "./Komputer.svg";
import "./Tampilanawal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function Tampilanawal() {
  return (
    <div>
      <div className="containertawal">
        <img src={komputer} alt="Komputer" />
      </div>

      <div className="content">
        <h2 className="texttawal">
          Selamat Datang di Pusat Komunikasi. Ada yang bisa saya bantu?
        </h2>
        <div classNamena="navigasi">
          <div cls="navkiri">
            <FontAwesomeIcon icon={faChevronLeft} />
            <p>Back</p>
          </div>
          <div className="navkiri">
            <p>Next</p>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tampilanawal;
