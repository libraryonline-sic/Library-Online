import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/Search";

import Logo from "./Amogus.jpg";

export default function Perpus() {
    return (
        <div>
            <div className="sbar">
                <SearchBar placeholder="Enter a Book Name..." />
            </div>
            <br></br>
            <p className="bukuTeratas">BUKU TERATAS!</p>
            <br></br>
            <div className="container">
                <img src={Logo} className="logo1" alt="Logo" />
                <img src={Logo} className="logo2" alt="Logo" />
                <img src={Logo} className="logo3" alt="Logo" />
                <img src={Logo} className="logo4" alt="Logo" />
            </div>

            <div className="judulBuku">
                <Link to="./BuyingPage" className="bukub">
                    Buku Sedih
                </Link>
                <p className="bukuc">Buku Sayang</p>
                <p className="bukud">Buku Cinta</p>
                <p className="bukue">Buku Kecewa</p>
            </div>
        </div>
    );
}
