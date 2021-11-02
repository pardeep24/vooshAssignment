import React, { useEffect, useCallback, useMemo, useState } from "react";

import Search from "./Search";
import UserList from "./UserList";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users && users.length <= 0) {
      fetch("https://api.github.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((er) => console.log(er));
      console.log("Render Users First");
    }
  }, [users]);

  const filteredUsersHandler = useCallback((filterUsers) => {
    if (filterUsers && filterUsers.length > 0) {
      setUsers(filterUsers);
    }
  }, []);

  const usersList = useMemo(() => {
    return <UserList users={users} />;
  }, [users]);

  return (
    <div className="App">
      <section>
        <Search onLoadUsers={filteredUsersHandler} />
        {usersList}
      </section>
    </div>
  );
};

export default Users;
