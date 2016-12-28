import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router'
class Nav extends Component {

  render() {

    return(
      <div>
        <h1>React Timer App</h1>
        <IndexLink to= '/timer' >Timer</IndexLink>
        <IndexLink to= '/countdown'>Countdown</IndexLink>
      </div>
    )
  }
}

export default Nav
