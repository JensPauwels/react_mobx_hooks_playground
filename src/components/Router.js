import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import {
  Overview
} from './pages';

import {
  Footer
} from './global';

const Wrapper = Component => ({...props}) => (
  <>
    <main>
      <Component {...props}/>
    </main>
    <Footer />
  </>
);

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Wrapper(Overview)}/>
      <Route exact path="*" component={() => <Redirect to="/" />}/>
    </Switch>
  </BrowserRouter>
);

export default Router;

