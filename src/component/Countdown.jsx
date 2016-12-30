import React, {Component} from 'react';
import Clock from './Clock.jsx';
import CountdownForm from './CountdownForm.jsx';
import Controls from './Controls.jsx'

class Countdown extends Component {
  constructor(props){
    super(props);
    this.state ={
      count: 0,
      countdownStatus: 'stopped'
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate")
    if (this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
        console.log("stoped")
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  }

  startTimer(){
    this.timer = setInterval(() => {
      var newCount = this.state.count -1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }

  handleSetCountdown(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    })
  }

  handleStatusChange(){
    this.setState({countdownStatus: this.props.newStatus})
  }

  render(){
    var {count, countdownStatus} = this.state;
    var renderControlArea = ()=> {
      if (countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange.bind(this)} />
      }else {
       return <CountdownForm onSetCountdown = {this.handleSetCountdown.bind(this)} />
      }
    };

    return(
      <div>
        <Clock totalSeconds = {count} />
        {renderControlArea()}
      </div>
    )
  }
}

export default Countdown
