import React, { Component } from "react";
import { render } from "react-dom";
import Input from "react-validation/build/input";

export default class App extends Component {
  constructor(props) {
    super(props);
  }  render() {
    return (
    <div>
    <HomePage />
  </div>
);
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);