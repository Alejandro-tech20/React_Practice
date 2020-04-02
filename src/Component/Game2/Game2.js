import React, { useState,Fragment } from "react";
import "./Game.css";

const Game1 = () => {
  const [listBox, setlistBox] = useState({
    listItem: Array(9).fill(null),
    isX: true
  });
  const jugar = i => {
    const te = listBox.listItem.slice();
    const isx = listBox.isX;
    te[i]= isx ? "X": "0";
    setlistBox({ listItem: te, isX: !isx });
    if(saber(te)){
      alert("Ganado");
      setlistBox({
        listItem: te.fill(null),
        isx: true,
      })
    }
    // saber(te) ? alert("Ganado") : console.log("hola");
  };
  const saber = lista => {
    const matrix = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < matrix.length; i++) {
      const [a, b, c] = matrix[i];
      if (lista[a] && lista[a] === lista[b] && lista[a] === lista[c]) {
        return true;
      }      
    }
    return false;
  };
  return (
    <Fragment>
    <div className="board2 shadow">
      <div className="div2">
        <div className="box" onClick={() => jugar(0)}>
          {listBox.listItem[0]}
        </div>
        <div className="box" onClick={() => jugar(1)}>
          {listBox.listItem[1]}
        </div>
        <div className="box" onClick={() => jugar(2)}>
          {listBox.listItem[2]}
        </div>
      </div>
      <div className="div2">
        <div className="box" onClick={() => jugar(3)}>
          {listBox.listItem[3]}
        </div>
        <div className="box" onClick={() => jugar(4)}>
          {listBox.listItem[4]}
        </div>
        <div className="box" onClick={() => jugar(5)}>
          {listBox.listItem[5]}
        </div>
      </div>
      <div className="div2">
        <div className="box" onClick={() => jugar(6)}>
          {listBox.listItem[6]}
        </div>
        <div className="box" onClick={() => jugar(7)}>
          {listBox.listItem[7]}
        </div>
        <div className="box" onClick={() => jugar(8)}>
          {listBox.listItem[8]}
        </div>
      </div>
    </div>

{/* <div className="box2"></div> */}
    </Fragment>

  );
};

export default Game1;
