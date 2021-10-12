import "./Profilpengguna.css";
import logo from "./profil kosong.png";
import ikon from "./background.jpg";
import buku from "./bukucontoh.pdf";
function Profilpengguna() {
  return (
    <div>
      <form>
        <img src={logo} alt="logo" className="foto" />
        <img src={ikon} alt="logo" className="ikon" />
        <div className="Tulisan">
          <h1 className="pp">Profil Pengguna</h1>
        </div>
        <div className="teks">
          <p className="kalpembukapp">
            Jalan-Jalan Bareng Kak Luna, Pulangnya Membeli Kayu, Hai Kamu Yang
            Disna Kenalan Yuk!
          </p>
        </div>
        <div className="container-pp">
          <label>
            <b>Nama Profil</b>
          </label>
          <input
            type="text"
            placeholder="Masukkan Nama Profil"
            className="uname"
          />
          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Masukkan Username"
            className="uname"
          />
          <label>
            <b>Email</b>
          </label>
          <input type="text" placeholder="Masukkan Email" className="uname" />
          <label>
            <b>Jenjang Pendidikan</b>
          </label>
          <input
            type="password"
            placeholder="Masukkan Jenjang Pendidikan"
            className="psw"
          />
          <label>
            <b>Tanggal Lahir</b>
          </label>
          <input
            type="date"
            placeholder="Masukkan Tanggal Lahir"
            className="tanggal"
          />
          <label>
            <b>Topik yang Diminati</b>
          </label>
          <input
            type="text"
            placeholder="Masukkan Topik yang Diminati"
            className="psw"
          />

          <button type="submit">Perbarui profil</button>
        </div>
      </form>
    </div>
  );
}

export default Profilpengguna;
