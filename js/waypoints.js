//1) npm install 'react-waypkoint'
//2) import Waypoint from 'react-waypoint'
//3) convert to ES6 module syntax
//4) import 'basic.css' from:  https://github.com/brigade/react-waypoint/blob/gh-pages/styles/examples/basic.css
//

import React from 'react'
import Waypoint from 'react-waypoint'

var PropTypes = React.PropTypes;

export class WaypointExample extends React.Component{
  constructor(props){
    super(props);

    console.log(this)
    this.state = {
      changeValue: ""
    }
  }

  /**
   * @return {Object}
   */

  _setMessage(value) {
    this.setState({ changeValue: value });
  }

  /**
   * @return {Object}
   */
  _renderMessage() {
    // console.log(this)
    // if (!this.state.changeValue) {
    //   return;
    // }

    var classes = `change_element ${this.state.changeValue}`;
    return (
      <div className={classes}>
          <img src="./images/kenny-powers.jpg"/>
      </div>
    );
  }

  /**
   * @return {Object}
   */
  render() {
    return (
      <div className="basic-example">
        {this._renderMessage()}
        <div className="basic-example__scrollable-parent">
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__waypoint-line"/>
          <Waypoint
            onEnter={this._setMessage.bind(this, 'inside')}
            onLeave={this._setMessage.bind(this, 'outside')}
            threshold={0}
          />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
          <div className="basic-example__spacer" />
        </div>
      </div>
    )
  }
}