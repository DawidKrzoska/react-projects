import React, { useState, useEffect } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(data);
  };

  useEffect(() => {
    setText([]);
  }, [count]);

  return (
    <section className="section-center">
      <h3>Lorem Ipsum ??</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs : </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => {
          if (index >= count) {
            return null;
          }
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
