import React, { useEffect } from "react";
import useObserver from "./UserObserver";
import placeholder from "./placeholder.jpg";
import "./App.css";

function Mia() {
  const images = [
    "http://placekitten.com/g/600/600",
    "http://placekitten.com/g/700/700",
    "http://placekitten.com/g/800/800"
  ];

  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null
  });

  console.log('render');

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        observer.unobserve(lazyImage);
      }
    });
  }, [entries, observer]);

  useEffect(() => {
    const images = document.querySelectorAll(".lazy");
    setElements(images);
    // images.forEach(item=>alert(item));
    // alert(images[0]);
  }, [setElements]);

  return (
    <div className="App">
      <div className="App-header">
        <h1>UseObserver hook example</h1>
        {images.map(source => (
          <img key={source} className="lazy" data-src={source} src={placeholder} alt="name" />
        ))}
      </div>
    </div>
  );
}

export default Mia;