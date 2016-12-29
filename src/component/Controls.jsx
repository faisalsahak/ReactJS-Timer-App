import React, {Component} from 'react'

class Controls extends Component {
  propTypes = {
    countdownStatus: React.PropTypes.string.isRequired
  }


  render(){
    var {countdownStatus} = this.props;
    var renderStartStopButton = ()=>{
      if (countdownStatus === 'started'){
        return <button className = "button secondary">Pause</button>
    }else if (countdownStatus === 'paused') {
      return <button className = "button primary">Start</button>
    }
  }
    return(
        <div className= "controls">
          {renderStartStopButton()}
          <button className = "button alert hallow">Clear</button>
        </div>
    )
  }
}
export default Controls
