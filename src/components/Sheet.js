import React, { Component } from "react";

import { getApi } from "../services/getJSON";
import Task from "./Task";

export default class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: []
    };
  }

  componentDidMount() {
    getApi()
      .then(result => {
        this.setState({
          apiData: result
        });
      })
  }
  render() {
    const { mainTitle, doStatus } = this.props;
    const allTaskElements = this.state.apiData.map((element, i) => {

      if(element.status=={doStatus}){

      return (
        <div>
          <Task title={element.title} />
        </div>
      );
      }
    });


    return (


      <div>
        {allTaskElements}
      </div>
    );
  }
}
