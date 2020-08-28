import React, { Component } from "react";
import "../style/Sheet.scss";

import { getAllTasksApi } from "../services/getJSON";
import Task from "./Task";

const API_HEROES_URL =
  "https://us-central1-itfighters-hero.cloudfunctions.net/api/hero";

export default class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      ststus: this.props.doStatus,
      onInputChange: ""
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

  addOnSubmit = event => {
    event.preventDefault();
    console.log(this.state.onInputChange);

    fetch(API_HEROES_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        superhero: this.state.onInputChange,
        publisher: this.props.doStatus,
        firstAppearance: "",
        characters: "",
        url: ""
      })
    })
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

  onInputChange = event => {
    this.setState({
      onInputChange: event.target.value
    });
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
          <form className="add-task-part" onSubmit={this.addOnSubmit}>
            <input
              type="text"
              placeholder="Wprowadź nazwę"
              onChange={this.onInputChange}
            />
            <button>Add new task</button>
          </form>
        </span>
      </div>
    );
  }
}
