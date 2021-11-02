import { Route, Switch } from "react-router";
import "./App.css";
import UserDetail from "./components/UserDetail/UserDetail";
import Users from "./components/Users/Users";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/user/:username">
          <UserDetail />
        </Route>
        <Route path="/">
          <Users />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
