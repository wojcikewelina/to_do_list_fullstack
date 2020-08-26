import React, { Component } from "react";
import "../style/Sheet.scss";

import { getApi } from "../services/getJSON";
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
    getApi().then(result => {
      this.setState({
        apiData: result
      });
    });
  }

  editOnClick = event => {
    alert("edytowanko");
  };
  removeOnClick = event => {
    alert("kasowanko");
  };

  render() {
    const { mainTitle, doStatus, editOnClick, removeOnClick } = this.props;
    const allTaskElements = this.state.apiData.map((element, i) => {
      if (element.status == doStatus) {
        return (
          <Task
            title={element.title}
            editOnClick={this.editOnClick}
            removeOnClick={this.removeOnClick}
          />
        );
      }
    });

    return (
      <div className="sheet-box">
        <h3>{mainTitle}</h3>
        <ul>{allTaskElements}</ul>
      </div>
    );
  }
}
