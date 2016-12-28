// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Main from './component/Main.jsx'
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path= '/' component= {Main} />
  </Router>
  , document.getElementById('react-root'));
