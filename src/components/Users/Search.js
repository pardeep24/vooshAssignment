import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const { onLoadUsers } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter !== '' && enteredFilter === inputRef.current.value) {            
        fetch(`https://api.github.com/search/users?q=${enteredFilter}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {onLoadUsers(data.items);})
          .catch((er) => console.log(er));
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [onLoadUsers, enteredFilter, inputRef]);


  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Search user</label>
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
