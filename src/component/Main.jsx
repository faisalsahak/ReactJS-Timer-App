import React, {Component} from 'react';
import Nav from './Nav.jsx';

class Main extends Component {

  render() {

    return(
      <div>
        <Nav />
        <div className="row">
          <div className="column small-centered mediom-6 large-4">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Main
