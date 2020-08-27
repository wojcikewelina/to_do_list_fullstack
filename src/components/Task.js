import React, { Component } from "react";
import "../style/Task.scss";

const API_HEROES_URL =
  "https://us-central1-itfighters-hero.cloudfunctions.net/api/hero";

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.title,
      id: this.props.id,
      showBtn: false

    };
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value,
      showBtn: true
    });
  };

  handleSubmit = event => {

 this.setState({   
      showBtn: false
    });

    event.preventDefault();
    alert("zmianiłeś dane");
    console.log(this.state.id);
    console.log(this.state.inputValue);
    fetch(API_HEROES_URL + "/" + this.state.id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        id: this.props.id,
        publisher: this.props.publisher,
        superhero: this.state.inputValue
      })
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        Promise.reject("http code: ", resp.status);
      }
      console.log("response: ", resp);
    });
  };
  render() {
    const { title, removeOnClick, editOnClick, id, publisher } = this.props;

    return (
      <li>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          {this.state.showBtn?
          <button >Click to edit</button>:null
          }
        </form>

        <span className="task-btn-container">
          <button onClick={removeOnClick}>X</button>
        </span>
      </li>
    );
  }
}
