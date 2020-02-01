import React, { Component } from "react";
import "./styles.css";

const UserInput = props => {
  const inputStyle = {
    border: "2px solid red"
  };
  return (
    <div>
      <input
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName}
      />
    </div>
  );
};

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p> UserName: {props.userName} </p>
      <p> Some random text </p>
    </div>
  );
};

class App extends Component {
  state = {
    username: "React"
  };

  usernameChangedHandler = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>React,Component,props,state</h1>
        <h2>Start editing to see some magic happen!</h2>
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Mahesh" />
      </div>
    );
  }
}

export default App;
