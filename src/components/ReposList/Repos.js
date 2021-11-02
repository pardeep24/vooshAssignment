import React, { useEffect, useState } from "react";

import "./Repos.css";

const ReposList = (props) => {
  const [repos, setRepos] = useState([]);

  // Fetech Repos List
  useEffect(() => {
    fetch(`https://api.github.com/users/${props.username}/repos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((er) => console.log(er));
  }, [props.username]);

  return (
    <section className="repo-list">
      <h2>Loaded Repos</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <span>{repo.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReposList;
