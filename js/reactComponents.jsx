var React = require('react')

var Message = React.createClass({
  getInitialState: function(){
     return {
     	isVisible: true,
     	titleMessage: 'Hellow, everybody titleMessageInlineStyle!!'

     }
  },

  render: function(){

  	var inlineStyles = {
  		display: this.state.isVisible ? 'block' : 'none'
  	}

    return ( 
        <div className="greet" style={inlineStyles}>
            <h1 >{this.state.titleMessage}</h1>
            <NextMessage />
        </div>
    );
  }
});

var NextMessage = React.createClass({
	render: ()=>{
		return(
				<p>Count me in too... </p>
			)

	}
})

module.exports = {
	Message: Message
}