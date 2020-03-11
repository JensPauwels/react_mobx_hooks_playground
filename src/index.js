import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'
import { configure } from 'mobx';

configure({
  enforceActions: "never"
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
