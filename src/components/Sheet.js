import React, { Component } from "react";
import "../style/Sheet.scss";

import { getAllTasksApi } from "../services/getJSON";
import Task from "./Task";

export default class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      ststus: this.props.doStatus,
      addInputValue: ""
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

  addNewTask = () => {

     fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        superhero: inputSuperhero.value,
        publisher: inputPublisher.value,
        firstAppearance: inputfirstApperance.value,
        characters: inputCharacters.value,
        url: inputURL.value
      })
    })
      .then(clearInput())
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          Promise.reject("http code: ", resp.status);
        }
        console.log("response: ", resp);
      })
      .then(data => console.log("dane od serwera", data))
      .catch(err => console.warn("nie działa", err))
      .then(() => location.reload());
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
            key={element.id + "num"}
          />
        );
      }
    });

    return (
      <div className="sheet-box">
        <h3>{mainTitle}</h3>
        <ul>{allTaskElements}</ul>

<span>
          <input
            type="text"
            value={this.state.addInputValue}
            placeholder="Wprowadź nazwę zadania"
          />
        <button onClick={this.addNewTask}>Add new element</button></span>
      </div>
    );
  }
}
