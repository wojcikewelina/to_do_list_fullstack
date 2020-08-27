import React, { Component } from "react";
import "../style/Sheet.scss";

import { getAllTasksApi } from "../services/getJSON";
import Task from "./Task";

export default class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      ststus: this.props.doStatus
    };
  }

  componentDidMount() {
    getAllTasksApi().then(result => {
      this.setState({
        apiData: result
      });
      console.log(this.state.apiData);
    });
  }

  editOnClick = event => {
    alert("edytowanko");
  };

  render() {
    const { mainTitle, doStatus, editOnClick } = this.props;
    const allTaskElements = this.state.apiData.map((element, i) => {
      if (element.publisher == doStatus) {
        // element.gender należy zmienić na element.status, doStatus też zminić
        return (
          <Task
            id={element.id}
            title={element.superhero}
            publisher={element.publisher}
            editOnClick={this.editOnClick}
            key={element.id+"num"}
          />
        );
      }
    });

    return (
      <div className="sheet-box">
        <h3>{mainTitle}</h3>
        <ul>{allTaskElements}</ul>
        <button>Add new element</button>
      </div>
    );
  }
}
