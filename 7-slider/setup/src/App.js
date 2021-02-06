import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let silder = setInterval(() => {
      if (index === people.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3000);
    return () => clearInterval(silder);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let postiotion = "nextSlide";
          if (personIndex === index) {
            postiotion = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            postiotion = "lastSlide";
          }
          return (
            <article key={id} className={postiotion}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            if (index === 0) {
              setIndex(people.length - 1);
            } else {
              setIndex(index - 1);
            }
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            if (index === people.length - 1) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
