// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Main from './component/Main.jsx'
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Timer from './component/Timer.jsx';
import Countdown from './component/Countdown.jsx'

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path= '/' component= {Main}>
      <Route path= '/timer' component= {Timer} />
      <Route path = '/countdown' component= {Countdown} />
    </Route>
  </Router>
  , document.getElementById('react-root'));
