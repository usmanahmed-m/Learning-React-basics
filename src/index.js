import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hi() {
  return (
    <div>
      <h1>Learning React from Dave Ceddia tutorial 2020</h1>
      <br />
      Hello World from <strong>Usman</strong>
      <p>JavaScript Expression: 5 + 10 = {5 + 10}</p>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
