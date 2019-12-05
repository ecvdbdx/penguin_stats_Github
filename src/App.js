import React, { Component } from "react";
import "./App.css";
import fetchJson from "./fetchJson.js";
import Repos from "./components/repos";
import SearchBar from "./components/searchBar";


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
    return (
      <div>
        <SearchBar/>
        <Repos repos={this.state.repos} />
      </div>

      ) ;
  }
}
export default App;
