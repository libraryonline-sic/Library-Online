import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/Search";
import "./Perpus.css";
import logo from "./Amogus.jpg";

export default function Perpus() {
  return (
    <div>
      <div className="sbar">
        <SearchBar placeholder="Enter a Book Name..." />
      </div>
      <br></br>
      <br></br>
      <div className="containerperpus">
        <p className="bukuTeratas">BUKU TERATAS!</p>
        <div className="item1">
          <img src={logo} className="logo1" alt="Logo" />
          <Link to="/Pembayaran">
            <p className="bukua">Buku Sedih</p>
          </Link>
        </div>
        <div className="item2">
          <img src={logo} className="logo2" alt="Logo" />
          <p className="bukuc">Buku Sayang</p>
        </div>
        <div className="item3">
          <img src={logo} className="logo3" alt="Logo" />
          <p className="bukud">Buku Cinta</p>
        </div>
        <div className="item4">
          <img src={logo} className="logo4" alt="Logo" />
          <p className="bukue">Buku Kecewa</p>
        </div>
      </div>
    </div>
  );
}
