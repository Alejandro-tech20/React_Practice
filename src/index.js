import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import "./main.css";
import * as serviceWorker from "./serviceWorker";
import Game from "./Game";
import Header from "./Component/Header/Header";
import FirstDiv from "./Component/FirtsDiv/FirtsDiv";
import "../src/Component/Game2/Game.css";
import Tabla1 from "./Component/Tabla/Tabla";
import Screen1 from "./Component/Screen1/Screen1";
import Screen2 from "./Component/Screen2/Screen2";
import Animated_Button from "./Component/Animated_button_press/Animated_Press_Button";
const data = [
  {
    image: "5.jpg",
    name: "Hamburguesa",
    porciento: "500g",
    precio: 40
  }
];
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ReactDOM.render(<Carousel items={items} active={0}/>
ReactDOM.render(
  <React.StrictMode>
    {" "}
    {/* <App /> <Header /> */} {/* <FirstDiv /> <Game />{" "} */}{" "}
    {/* <div className="box2 sombra"> </div>{" "} {<Tabla1  data={data}/>} */}{" "}
    <Screen1 /> {/* <Screen2 /> */} 
    <Animated_Button items={items} position={0} />{" "}
    {/* //items={items} active={1} /> */}{" "}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
