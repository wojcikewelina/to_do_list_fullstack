import React from "react";
import "./style.css";
import Sheet from "./components/Sheet.js"

export default function App() {
  return (
    <div>
      <h1>To do list</h1>
      <Sheet doStatus="done"/>
      
    </div>
  );
}
