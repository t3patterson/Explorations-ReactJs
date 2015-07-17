//1) npm install google-map-react
//2) login to google and go to console.developers.google.com
//3) while at google console.developers.google.com/project select 
//    'Create Project'
//4) Go to 'APis' on the right-side navbar
//5) select 'Google Maps Javascript API v3' then select the 'Enable APi' button
//6) Go to 'Credentials' and select 'Create New Key' under 'Public API access'
//7) Copy and Paste the Module-Import-Export Code Below, put in your apiKey in the < GoogleMap > Component
//8) Notice the 'map-container' className, we need to make a css class for it and give it a height
//9) import the 

// Module-Import-Export
import React, {PropTypes, Component} from 'react/addons.js';
import shouldPureComponentUpdate from 'react-pure-render/function.js';
import GoogleMap from 'google-map-react';

export class GoogleMapMarked extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div className="map-container" >
	       <GoogleMap
	        apiKey ={'AIzaSyBjddwSGSGLSClzlUxycF98GOVvufAtods'}
	        center={[29.75043, -95.337157]}
	        zoom={12}>
	        <MyGreatPlace lat={29.737467} lng={-95.337063}zoom={12}  />
	      </GoogleMap>
      </div>
    );
  }
}

var K_WIDTH = 30 , K_HEIGHT = 30 


class MyGreatPlace extends React.Component {
  constructor(props) {
    super(props);
    this.stylez = {
		  position: 'absolute',
		  width: K_WIDTH,
		  height: K_HEIGHT,
		  left: -K_WIDTH / 2,
		  top: -K_HEIGHT / 2,

		  border: '3px solid #5c832f',
		  borderRadius: K_HEIGHT,
		  backgroundColor: '#fff',
		  textAlign: 'center',
		  color: '#363942',
		  fontSize: 22,
		  fontWeight: 'bold',
		  lineHeight: "30px"
	}
     
  }

  render() {
    return (
       <div style={this.stylez}>
       	&#8796;
       </div>
    );
  }
}

