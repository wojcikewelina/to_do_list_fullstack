import React from "react";
import "./style.css";
import Sheet from "./components/Sheet.js";
import Header from "./components/Header.js";

// zmienić doStatus!

export default function App() {
  return (
    <div className="page-content">
    <Header/>
      <div className="all-sheets">
      <Sheet mainTitle="To do" doStatus="DC Comics" />  
      <Sheet mainTitle="In progress" doStatus="Marvel Comics" />
      <Sheet mainTitle="Done" doStatus="DC Comics" />
      </div>
    </div>
  );
}
