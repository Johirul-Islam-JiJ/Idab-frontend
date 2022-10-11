import Reactdom from 'react-dom'
import App from './App'
import './index.css'
import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'

Reactdom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.querySelector("#root")
);
