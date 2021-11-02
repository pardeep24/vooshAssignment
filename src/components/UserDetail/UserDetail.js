import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import GistsList from "../GistsList/Gists";
import ReposList from "../ReposList/Repos";
const UserDetail = () => {
  const param = useParams();
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${param.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUserDetail(data))
      .catch((er) => console.log(er));
  }, [param.username]);

  return (
    <div className="App">
      <section className="text-center">
        <Link to="/">Back To Users</Link>
        <br />
        <img
          src={userDetail.avatar_url}
          alt={userDetail.login}
          className="avatar"
        />
        <br />

        <span>Username: {userDetail.login}</span>
        <br />
        <span>Name: {userDetail.name}</span>
        <br />
        <span>Location: {userDetail.location}</span>
      </section>
      <div className="row_group">
        <div className="item">
          <ReposList username={userDetail.login} />
        </div>
        <div className="item">
          <GistsList username={userDetail.login} />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
