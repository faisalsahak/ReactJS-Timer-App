import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router'
class Nav extends Component {

  render() {

    return(
      <div className = "top-bar">
        <div className = "top-bar-left">
          <ul className= "menu">
            <li className= 'menu-text'>React Timer App</li>
            <li><IndexLink to= '/' activeClassName = "active-link" >Timer</IndexLink></li>
            <li><Link to= '/countdown' activeClassName = "active-link">Countdown</Link></li>
          </ul>
        </div>
        <div className = "top-bar-right">
          <ul className = "menu-text">
            <li className= 'menu-text'>
              Created By <a href = "#">Click</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
