import React from "react";
import "./Screen1.css";
import nyorck from '../../img/new_yorck.jpg';
import TodoList from "../Animated_Item/AnimatedItem";

const Screen1 = () => {
  return (
    <div className="screen1">
      <div className="child1">
        <div className="cub_child1"></div>
      </div>
      <div className="child_2">
        <img src={nyorck} alt="new york"/>
        <h3>
          Portafolio de Alejandro
        </h3>
        <h4>
          Inscibase para recibir noticias, eventos, conferencias y novedades reaacionadas con el mundo del diseño
        </h4>
        <h4>
           {/* <TodoList/> */}
           </h4>
        <div className="botones">
          <button>Activar</button>
          <button>Desactivar</button>
        </div>
      </div>
    </div>
  );
};
export default Screen1;
