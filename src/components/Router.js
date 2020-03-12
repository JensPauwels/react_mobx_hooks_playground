import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import {
  Overview
} from './pages';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Overview}/>
      <Route exact path="*" component={() => <Redirect to="/" />}/>
    </Switch>
  </BrowserRouter>
);

export default Router;

