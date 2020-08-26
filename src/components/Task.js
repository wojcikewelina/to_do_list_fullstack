import React, { Component } from "react";
import "../style/Task.scss";

export default class Task extends Component {
constructor(props) {
    super(props);
    this.state = {
    
         };
  }

  render() {
    const { title } = this.props;

    return (
      <li><p>{title}</p><button>x</button><button>edit</button></li>
    );
  }
}
