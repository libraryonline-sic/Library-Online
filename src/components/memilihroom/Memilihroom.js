import React from "react";
import "./Memilihroom.css";
import Return from "./Return.png";
import Next from "./Next.png";

function Memilihroom() {
  return (
    <div>
      <div className="body">
        <div className="formulir">
          <div className="formu" action="room" method="POST">
            <h2 className="jdlroomcode">Room Code</h2>
            <table className="table">
              <tr>
                <td className="cln">Username For This Discussion</td>
                <td className="clninput">
                  <input type="text"></input>
                </td>
              </tr>
              <tr>
                <td className="roomcode">Room Code</td>
                <td className="bgrc">
                  <input type="text"></input>
                </td>
              </tr>
              <tr>
                <td className="fileto">File To Attach</td>
                <td className="bgfile">
                  <input type="file" className="specfile"></input>
                </td>
              </tr>
              <button type="submit" className="button">
                Procced
              </button>
            </table>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="contentback">
          <div className="back">
            <img src={Return} alt="Back" />
            <p>Back</p>
          </div>
        </div>
        <div className="contentnext">
          <div className="next">
            <p>Next</p>
            <img src={Next} alt="Next" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memilihroom;
