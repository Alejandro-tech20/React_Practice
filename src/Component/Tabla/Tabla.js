import React, { useState } from "react";
import Items from "./Item";
import "./Tabla.css";

const Tabla = props => {
  const [data, setdata] = useState({
    datas: props.data
  });
function _onRemove(index){
let {datas} = useState.data;
let temp = [
    ...datas.slice(0,index),
    ...datas.slice(index+1),
] 
setdata({
    data:temp,
})
};

  return (
    <div className="divRaiz">
      {props.data.map((item, index) => (
        <Items data={item} key={index} onRemove={_onRemove(index)} />
      ))}
    </div>
  );
};
export default Tabla;
