import React from "react";
import "./App.css";
import "./components/MyStyle.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/form/Navbars";

import Home from "./components/form/Home";
import NotFound from "./components/NotFound";
import About from "./components/form/About";
import Contact from "./components/form/Contact";
import AddUser from "./components/user/AddUser";
import EditUser from "./components/user/EditUser";
import ViewUser from "./components/user/ViewUser";
import Practice from "./components/Practice";
import Login from "./components/form/Login";
import ValidatedLoginForm from "./components/form/ValidatedLoginForm";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={ViewUser} />
          <Route exact path="/demo" component={Practice} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signin" component={ValidatedLoginForm} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </div>
  );
}
export default App;
