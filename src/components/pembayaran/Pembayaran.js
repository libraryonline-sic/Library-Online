import React from "react";
import petal from "./cover.jpg";
import "./Pembayaran.css";

export default function Pembayaran() {
  return (
    <div>
      <div className="leftside">
        <img src={petal} className="bukupilihan" alt="Logo" />
        <div className="ketbacaan">
          <div className="kontener">
            <div className="isikontener">
              <p className="ketbaca">Keterangan Bacaan</p>
              <hx></hx>
              <p className="judulbuku">
                Judul buku&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;Buku Sedih
              </p>
              <p className="penerbit">
                Penerbit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;Sinar
                Bacaan
              </p>
              <p className="jenisbacaan">Jenis Bacaan&nbsp;:&nbsp;Novel</p>
              <p className="genre">
                Genre&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;Drama,
                Slice of Life
              </p>
              <p className="isbn">
                ISBN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;1808777790
              </p>
              <p className="sinopsis">Sinopsis</p>
              <p className="isisinopsis">
                Sebuah buku yang ditulis dengan perasaan membiru karena cinta
                yang kandas :(
              </p>
            </div>
          </div>
        </div>
        <div className="containerbayar">
          <h1 className="harga">FREE</h1>
        </div>
      </div>
    </div>
  );
}
