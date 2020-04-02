import React, { useState, Fragment } from "react";
import "./Carousel.css";

const Carousel = props => {
  const [activeIndex, setactiveIndex] = useState(0);
  // const goActual = index => {
  //   setactiveIndex(index);
  // };
  const next = () => {
    activeIndex < props.imagenes.length - 1
      ? setactiveIndex(activeIndex + 1)
      : setactiveIndex(0);
  };
  const back = () => {
    activeIndex > 0
      ? setactiveIndex(activeIndex - 1)
      : setactiveIndex(props.imagenes.length - 1);
  };
  // style={{backgroundImage:'../../img/1.jpg'}}
  return (
    <div className="subSubDiv2 ">
      <div className="carousel">
        <div className="carousel_slide">
          {props.imagenes.map((item, index) => (
            <img
              src={item}
              alt=""
              key={index}
              className={index == activeIndex ? "img_active" : "img_hidden"}
            />
          ))}
        </div>
      </div>
      <div className="botones">
        <button onClick={() => back()}>Atras.</button>
        <button onClick={() => next()}>Sigui.</button>
      </div>
    </div>
  );
};
export default Carousel;
