import React from "react";
import "./style.css";
import Sheet from "./components/Sheet.js";

export default function App() {
  return (
    <div>
      <h1>To do list</h1>
      <Sheet mainTitle="To do" doStatus="to do" />
      <Sheet mainTitle="In progress" doStatus="in progress" />
      <Sheet mainTitle="Done" doStatus="done" />
    </div>
  );
}
