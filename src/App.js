import React, { Component } from "react";
import "./App.css";
import fetchJson from "./fetchJson.js";
import Repos from "./components/repos";

class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      collaborators: []
    };
  }
  componentDidMount() {
    fetchJson("https://api.github.com/orgs/ecvdbdx/repos")
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
