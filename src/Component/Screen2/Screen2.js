import React, {useState, useEffect, useRef, Fragment} from "react";
import "./screen.css";
import Mia from './ExporHoock';

const Screen2 = () => {
  const [width, setWidth] = useState(0);
const [ver, setVer]=useState([]);
const [clas,setClass] = useState("");
  // ==================================
   const options = {
    threshold: .5,
  };
  // const observer = useRef(new IntersectionObserver())


useEffect(()=>{
  const mostrar = ()=>{
    const ref = document.querySelector('#tow');
    if(document.documentElement.scrollTop>450){
      setClass("css_animation2");
    }else{
      setClass("hidden");
    }
    
  }
  
  window.addEventListener('scroll',mostrar);  
})


// ================================================
  
  
 
  return (
    <Fragment>
    <div className="screen2">
      <div className={`opciones div_1 ${clas}`}></div>
      <div  id='tow' className={`opciones div_2 ${clas}` }></div>
      <button>hola</button>
      <div className={`opciones div_3 ${clas}`}></div>
      <div className="text_left">
  <span>{width}</span>
        Diseño y desarrollo de aplicaciones a clientes, utilizando tecnologias
        mas populares, con alto rendimiento y seguridad
      </div>
      <div className="text_center">
        Diseño y desarrollo de aplicaciones a clientes, utilizando tecnologias
        mas populares, con alto rendimiento y seguridad
      </div>
      <div className="text_rigth">
        Diseño y desarrollo de aplicaciones a clientes, utilizando tecnologias
        mas populares, con alto rendimiento y seguridad
      </div>
      
    </div>
    <Mia/>
    </Fragment>
  );
};

export default Screen2;
