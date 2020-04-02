import React from "react";
import "../../main.css";
import icoGame from "../../icons/icons8-game.png";

const Header = () => {
  return (
    <header className="cabecera">
      <img src={icoGame} className="show" alt=''></img>
      <div>
        <a href ='/'>Inicio</a>
        <a href ='/'>Juegos</a>
        <a href ='/'>Imagenes</a>
      </div>
    </header>
  );
};
export default Header;
