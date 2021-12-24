import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { Layout } from "../components/layout";
import { Home, Search, Pickup, Order, Account } from "../pages";

function Routes() {
  const location = useLocation();
  return (
    <Layout>
      <Switch location={location} key={location.key}>
        <Route path="/" component={Home} exact />
        <Route path="/pickup" component={Pickup} />
        <Route path="/search" component={Search} />
        <Route path="/order" component={Order} />
        <Route path="/account" component={Account} />
        <Redirect to="oops" />
      </Switch>
    </Layout>
  );
}

export default Routes;
