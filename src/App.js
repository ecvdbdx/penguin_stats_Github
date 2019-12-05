import React, { Component } from "react";
import "./App.css";
import Repos from "./components/repos";

class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: []
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/repositories")
      .then(res => res.json())
      .then(data => {
        this.setState({ repos: data });
      })
      .catch(console.log);
  }
  render() {
    return <Repos repos={this.state.repos} />;
  }
}

export default App;
