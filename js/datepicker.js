//1) npm install react-datepicker
//2) require 'react' and '../path/to/react-datepicker.min.js'
//3) @import the css from the react-datepicker/dist in the style.scss file
//4) 

var React = require('react');
var DatePicker = require('../node_modules/react-datepicker/dist/react-datepicker.min.js');

export var DatePickerComponent = React.createClass({
  displayName: 'exampleComponent',

  getInitialState: function() {
    return {
      start_date: moment(),
      end_date: moment(),
      new_date: null,
      bound_date: null,
      example5Selected: null,
      example6Selected: null
    };
  },

  handleStartDateChange: function(date) {
    this.setState({
      start_date: date
    });
  },

  render: function() {
      return (
    	<div>
	      <DatePicker
		        key="example1"
		        selected={this.state.start_date}
		        onChange={this.handleStartDateChange}
	      />
     
       </div>
    	)
	}
})


