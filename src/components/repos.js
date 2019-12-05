import React from "react";
import "./repos.css";

const Repos = ({ repos }) => {
  return (
    <div>
      <center>
        <h1>Repos List</h1>
      </center>
      {repos.map(repos => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{repos.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{repos.id}</h6>
            <p class="card-text">{repos.owner.login}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Repos;
