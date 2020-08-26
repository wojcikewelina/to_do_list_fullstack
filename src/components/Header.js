import React, { Component } from "react";
import "../style/Header.scss";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-top">
          <h1>TO DO LIST</h1>
          <p>Do it!</p>
        </div>
        
      </header>
    );
  }
}
