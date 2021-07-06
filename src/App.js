import "./App.css";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

import Header from "./components/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Users />
                </Route>
                <Route exact path="/add">
                    <AddUser />
                </Route>

                <Route exact path="/users/:userId">
                    <UserDetails />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
