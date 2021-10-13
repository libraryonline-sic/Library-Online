import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";
import { Link } from "react-router-dom";

function input() {
    return (
        <body>
            <div className="form">
                <center>
                    <div>
                        <p className="judul">Selamat datang di Petal!</p>
                    </div>
                    <div>
                        <p className="subjudul">
                            Silahkan Login Untuk Melanjutkan
                        </p>
                    </div>
                    <div className="kontenerinput">
                        <div className="email">
                            <input
                                type="text"
                                placeholder="Masukkan Email/No. Telepon Anda"
                            />
                        </div>
                        <div className="password">
                            <input
                                type="text"
                                placeholder="Masukkan Password Anda"
                            />
                        </div>
                        <div className="spacebtn">
                            <Link to="/Homepage">
                                <button
                                    type="button"
                                    className="btnsignup-login"
                                    placeholder="login"
                                >
                                    Login
                                </button>
                            </Link>
                        </div>
                        <div>
                            <p className="loginoption">
                                atau masuk menggunakan
                            </p>
                        </div>
                        <div className="giconspace">
                            <FontAwesomeIcon
                                icon={faGoogle}
                                className="gicon"
                            />

                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="gfacebook"
                            />
                        </div>
                        <div>
                            <p className="signup">
                                belum punya akun? &nbsp;
                                <a href="/register" className="hrefsignup">
                                    Register
                                </a>
                            </p>
                        </div>
                    </div>
                </center>
            </div>
        </body>
    );
}

export default input;
