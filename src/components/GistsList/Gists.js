import React, { useEffect, useState } from "react";

import "./Gists.css";

const GistsList = (props) => {
  const [gists, setGists] = useState([]);

  // Fetech Repos List
  useEffect(() => {
    fetch(`https://api.github.com/users/${props.username}/gists`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setGists(data))
      .catch((er) => console.log(er));
  }, [props.username]);

  return (
    <section className="repo-list">
      <h2>Loaded Gists</h2>
      <ul>
        {gists.map((gist) => (
          <li key={gist.id}>
            <span>{gist.html_url}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GistsList;
