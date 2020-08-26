import React, { Component } from "react";

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
  render() {
    const { mainTitle, doStatus } = this.props;
    const allTaskElements = this.state.apiData.map((element, i) => {
      if (element.status == doStatus) {
        return <Task title={element.title} />;
      }
    });

    return (
      <div>
        <h3>{mainTitle}</h3>
        <ul>{allTaskElements}</ul>
      </div>
    );
  }
}
