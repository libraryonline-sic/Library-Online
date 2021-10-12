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
        <center>
          <h2 className="texttawal">
            Selamat Datang di Pusat Komunikasi. Ada yang bisa saya bantu?
          </h2>
        </center>
        <div className="navigasi">
          <div className="navkirita">
            <FontAwesomeIcon icon={faChevronLeft} className="chevronleftta" />
            <p className="backta">&nbsp;Back</p>
          </div>
          <div className="navkanan">
            <p className="nextta">Next&nbsp;</p>
            <FontAwesomeIcon icon={faChevronRight} className="chevronrightta" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tampilanawal;
