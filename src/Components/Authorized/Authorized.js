import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../HomeTheme/Home";
import AuthMenu from "./AuthMenu";
import NewCostumerForm from "./NewCostumerForm";
import DashBoard from "./Dashboard";
import AppFooter from "../AppFooter";

export default function Authorized() {
  return (
    <>
      <AuthMenu />
      <Switch>
        <Route exact path="/">
          <Home />
          <AppFooter />
        </Route>
        <Route exact path="/newCostumer">
          <NewCostumerForm />
        </Route>
        <Route exact path="/profile">
          <DashBoard />
        </Route>
      </Switch>
    </>
  );
}
