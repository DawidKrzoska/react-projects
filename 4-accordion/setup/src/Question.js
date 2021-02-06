import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title} </h4>
        <button
          className="btn"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p>{open ? info : null}</p>
    </article>
  );
};

export default Question;
