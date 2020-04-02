import React from "react";
import ico from '../../icons/square.svg';

const Item = props => {
  const _quitar = (i) => {
    if (props.onRemove) {
      props.onRemove();
    }
  };

  return (
    <div className="icono">
      {/* <img src={require(`../../img/${props.data.imagen}`)} alt="" /> */}

      <div className="contenido">
        <span className="item-precio">{props.data.precio}</span>
        <span className="item-name">{props.data.name}</span>
      </div>
      <div className="porciento">
        <h3>{props.data.porciento}</h3>
      </div>
      <div className="botones">
        <button onClick={() => _quitar()}>
          <i className="icono_cerrar">close</i>
        </button>
      </div>
    </div>
  );
};

export default Item;
