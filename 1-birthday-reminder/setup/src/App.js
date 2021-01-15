import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const [buttonName, setButtonName] = useState("Clear All");

  const clickHandle = () => {
    if (Array.isArray(people) && people.length) {
      setPeople([]);

      setButtonName("Revert All");
    } else {
      setPeople(data);
      setButtonName("Clear All");
    }
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button onClick={() => clickHandle()}>{buttonName}</button>
      </section>
    </main>
  );
}

export default App;
