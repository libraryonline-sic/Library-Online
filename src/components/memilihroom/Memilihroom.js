import React from "react";
import "./Memilihroom.css";
import Return from "./Return.png";
import Next from "./Next.png";

function Memilihroom() {
  return (
    <div>
      <div className="body">
        <div className="formulir">
          <form action="room" method="POST">
            <h2>Room Code</h2>
            <table>
              <tr>
                <td>Username For This Discussion</td>
                <td>
                  <input type="text"></input>
                </td>
              </tr>
              <tr>
                <td>Room Code</td>
                <td>
                  <input type="text"></input>
                </td>
              </tr>
              <tr>
                <td>File To Attach</td>
                <td>
                  <input type="text"></input>
                </td>
              </tr>
              <button type="submit" className="button">
                Procced
              </button>
            </table>
          </form>
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
