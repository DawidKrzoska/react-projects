import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setLIst] = useState([]);
  const [isEditing, setIsEdyting] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const clearHandler = () => {};

  const sumbmitHandler = (event) => {
    event.preventDefault();
    if (!name) {
      //display alert
    } else if (name && isEditing) {
      //edit mode
    } else {
      //Show alert

      //create a new item
      const newItem = { id: new Date().getTime().toString(), title: name };
      setLIst([...list, newItem]);
      setName("");
    }
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={sumbmitHandler}>
        {alert.show && <Alert />}
        <h3> grocery buddy</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g cookies"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} />
        <button className="clear-btn" onClick={clearHandler}>
          Clear Items{" "}
        </button>
      </div>
    </section>
  );
}

export default App;
