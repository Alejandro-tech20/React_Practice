import React from "react";
import "../../main.css";
import Game from "../../Game";
import Game1 from "../Game2/Game2";
import "../Game2/Game.css";
import Carousel from "../Carousel/Carousel";
import una from '../../img/1.jpg';
import dos from '../../img/2.jpg';
import tres from '../../img/3.jpg';


const FirstDiv = () => {
  return (
    <div className="div1">
      <div className="subDiv sombra">
        <div className="subSubDiv">
          <Game />
          <p> Juego 1 </p>
        </div>
        <div className="subSubDiv sombra2">
          <Game1 />
          <p> Juego 2 </p>
        </div>
        <Carousel imagenes={[una,dos,tres]}/>
      </div>
    </div>
  );
};

export default FirstDiv;
