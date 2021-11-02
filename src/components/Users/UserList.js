import React from "react";
import { Link } from "react-router-dom";

import "./UserList.css";

const UserList = (props) => {
  return (
    <section className="user-list">
      <h2>Loaded Users</h2>
      <ul>
        {props?.users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.login}`}>
              <img src={user.avatar_url} alt={user.login} className="avatar" /><br/>
              <span>{user.login}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserList;
