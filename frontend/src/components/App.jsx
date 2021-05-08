import React from "react";
import { render } from "react-dom";

export default function App() {
  return (
    <div>
      <h1 id="nipro-logo">Nipro</h1>
      <p>construction in progress......</p>
      <p>It appears to work</p>
      <p>let's start working</p>
      <p> i am currently working on design and learn more about databases</p>
    </div>
  );
}

render(<App />, document.getElementById("app"));
