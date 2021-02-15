import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("#AAAAAA");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#AAAAAA").all(10));

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      setError(false);
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      {" "}
      <section className="container">
        <h3>COLORS</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="color"
            value={color}
            className={`${error ? "error" : null}`}
            onChange={(event) => {
              setColor(event.target.value.toUpperCase());
            }}
          />
          <button className="btn" type="sumbit">
            GENERATE
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
