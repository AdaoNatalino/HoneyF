import React from "react";
import { Switch, Route } from "react-router-dom";

// import NotFound404 from "../NotFound404"
import Home from "../HomeTheme/Home";
import AuthMenu from "./AuthMenu";
import NewItemForm from "./NewItemForm";
import DashBoard from "./Dashboard";
import AppFooter from '../AppFooter';

export default function Authorized() {
  return (
    <>
      <AuthMenu />
      <Switch>
        <Route exact path="/">
          <Home />
          <AppFooter/>
        </Route>
        <Route exact path="/newItem">
          <NewItemForm />
        </Route>
        <Route exact path="/profile">
          <DashBoard />
        </Route>

        {/* <Route path="*">
                    <NotFound404 />
                </Route> */}
      </Switch>
    </>
  );
}
