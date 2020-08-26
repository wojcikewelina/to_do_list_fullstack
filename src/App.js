import React from "react";
import "./style.css";
import Sheet from "./components/Sheet.js";
import Header from "./components/Header.js";

export default function App() {
  return (
    <div className="page-content">
    <Header/>
      <div className="all-sheets">
      <Sheet mainTitle="To do" doStatus="to do" />
      <Sheet mainTitle="In progress" doStatus="in progress" />
      <Sheet mainTitle="Done" doStatus="done" />
      </div>
    </div>
  );
}
