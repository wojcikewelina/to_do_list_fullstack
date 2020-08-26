import React, { Component } from "react";
import "../style/Task.scss";

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, removeOnClick, editOnClick } = this.props;

    return (
      <li>
        <p>{title}</p>
        <span className="task-btn-container">
          <select>
            <option value="0">...</option>

            <option value="1" onClick={removeOnClick}>Delete
            </option>
            <option value="2"onClick={editOnClick}>Edit</option>
            <option value="3">To do</option>
            <option value="3">In progress</option>
            <option value="3">Done</option>
          
          </select>
        </span>
      </li>
    );
  }
}
