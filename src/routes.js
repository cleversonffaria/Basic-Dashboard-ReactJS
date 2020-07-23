import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/Login/ForgotPassword";
import RecoverPassword from "./pages/Login/RecoverPassword";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"} component={Login} />
      <Route path={"/forgot"} component={ForgotPassword} />
      <Route path={"/recover"} component={RecoverPassword} />
      <Route path={"/dashboard"} component={Dashboard} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
