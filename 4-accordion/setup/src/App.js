import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>FAQ</h3>
        <section className="info">
          {data.map((questions) => {
            return <SingleQuestion key={questions.id} {...questions} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
