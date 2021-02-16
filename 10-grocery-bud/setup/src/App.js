import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setLIst] = useState(getLocalStorage());
  const [isEditing, setIsEdyting] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const clearHandler = () => {
    showAlert(true, "Items cleared", "success");
    setLIst([]);
  };

  const sumbmitHandler = (event) => {
    event.preventDefault();
    if (!name) {
      showAlert(true, "Please enter value", "danger");
    } else if (name && isEditing) {
      //edit mode
      setLIst(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setEditId(null);
      setIsEdyting(false);
      setName("");
    } else {
      //Show alert
      showAlert(true, "Item added", "success");
      //create a new item
      const newItem = { id: new Date().getTime().toString(), title: name };
      setLIst([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const removeItem = (id) => {
    showAlert(true, "Item deleted", "danger");
    setLIst(list.filter((item) => item.id !== id));
    setEditId(null);
    setIsEdyting(false);
    setName("");
  };

  const editItem = (id) => {
    showAlert(true, "Item edting", "success");
    let itemToEdit = list.find((item) => item.id === id);
    setName(itemToEdit.title);
    setEditId(itemToEdit.id);
    setIsEdyting(true);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={sumbmitHandler}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearHandler}>
            Clear Items{" "}
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
