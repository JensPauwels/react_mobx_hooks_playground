import React from "react";
import ReactDOM from "react-dom";
import Router from './components/Router'
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/scss/screen.scss'

import { configure } from 'mobx';

configure({
  enforceActions: "never"
});


const rootElement = document.getElementById("root");
ReactDOM.render(<Router />, rootElement);
