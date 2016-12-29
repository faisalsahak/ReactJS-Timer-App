import React, {Component} from 'react';
import Clock from './Clock.jsx'

class Countdown extends Component {

  render(){

    return(
      <div>
        <h1>Coundown component</h1>
        <Clock totalSeconds = {180} />
      </div>
    )
  }
}

export default Countdown
