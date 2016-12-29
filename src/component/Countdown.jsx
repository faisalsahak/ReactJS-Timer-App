import React, {Component} from 'react';
import Clock from './Clock.jsx';
import CountdownForm from './CountdownForm.jsx'

class Countdown extends Component {
  constructor(props){
    super(props);
    this.state ={
      count: 0
    }
  }

  handleSetCountdown(seconds){
    this.setState({
      count: seconds
    })
  }

  render(){
    var {count} = this.state;
    return(
      <div>
        <Clock totalSeconds = {count} />
        <CountdownForm onSetCountdown = {this.handleSetCountdown.bind(this)} />
      </div>
    )
  }
}

export default Countdown
