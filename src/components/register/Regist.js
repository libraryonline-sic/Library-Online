import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Regist.css";
import { Link } from "react-router-dom";

function input() {
    return (
        <body>
            <div className="form-register">
                <div>
                    <p className="judul-register">Daftarkan akunmu di Petal!</p>
                </div>
                <div>
                    <p className="subjudul">
                        Silahkan daftar Untuk Melanjutkan
                    </p>
                </div>
                <div className="kontenerinput">
                    <div className="email">
                        <input type="text" placeholder="Masukkan Email Anda" />
                    </div>
                    <div className="notel">
                        <input type="text" placeholder="contoh: +6212345678" />
                    </div>
                    <div className="password">
                        <input
                            type="text"
                            placeholder="Masukkan Password Anda"
                        />
                    </div>
                    <div className="passwordconf">
                        <input
                            type="text"
                            placeholder="Konfirmasi Password Anda"
                        />
                    </div>
                    <div className="spacebtn">
                        <Link to="/login">
                            <button
                                type="button"
                                className="btnsignup-register"
                                placeholder="Sign Up"
                            >
                                Sign Up
                            </button>
                        </Link>
                    </div>
                    <div>
                        <p className="loginoption">atau daftar menggunakan</p>
                    </div>
                    <div className="giconspace">
                        <FontAwesomeIcon icon={faGoogle} className="gicon" />
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="gfacebook"
                        />
                    </div>
                    <div>
                        <p className="signup">
                            sudah punya akun? &nbsp;
                            <a href="/Login" className="hrefsignup">
                                login sekarang
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default input;
