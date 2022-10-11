import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Plans from "./pages/Plans";
import { ProvideAuth, useAuth } from "./hooks/useAuth";
import Dashboard from "./pages/Dashboard";
import "./lib/flags";

function App() {
  return (
    <ProvideAuth>
      <AppRouter />
    </ProvideAuth>
  );
}

function AppRouter() {
  const auth = useAuth();

  return (
    <Router>
      <Switch>
        {auth.user ? (
          <>
            <Route path="/">
              <Dashboard />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/plans">
              <Plans />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </>
        )}
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
