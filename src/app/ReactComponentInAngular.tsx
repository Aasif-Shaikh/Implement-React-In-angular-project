import * as React from "react";

export default function ReactComponentInAngular() {
  const [implementReact, setImplementReact] = React.useState("");

  const changeHandler = () => setImplementReact("Angular");

  return (
    <div>
      <h1>Implement React in {implementReact}</h1>
      <button onClick={changeHandler}>Submit</button>
    </div>
  );
}
