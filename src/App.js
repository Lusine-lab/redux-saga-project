import "./App.css";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

import Header from "./components/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
            </Switch>
        </Router>
    </div>
  );
}

export default App;
