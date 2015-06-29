var React = require('react')

var OutsideObject = {

}

var App = React.createClass({

	getInitialState: function(){
		return {
			amount1 : 0,
			amount2 : 0,
		}
	},

	makeChange: function(componentName, val){
		this.setState({
			amount1: componentName==="input_amount1" ? val : this.state.amount1 ,
			amount2: componentName==="input_amount2" ? val : this.state.amount2
			})
	},



	render: function(){

		console.log("RENDER---tIIImmmee")

		var totalOfBoth = parseInt(this.state.amount1 || 0,10) + parseInt(this.state.amount2 || 0 ,10)		

		console.log(this.state.amount2)
		console.log(totalOfBoth)
		var amt = 0

		return (
			<div>
				<PaymentInput handleChange = {this.makeChange} componentName={"input_amount1"}/> 
				<PaymentInput handleChange = {this.makeChange} componentName={"input_amount2"}/> 
 				<hr/>
 				<PaymentOutput totalAmt = {totalOfBoth} />
			</div>
		)
	}

})

var PaymentInput = React.createClass({
	invoke_makeChange: function(evt){
		var propsRefName = this.props.componentName
		var capturedValue = this.refs[propsRefName].getDOMNode().value
		console.log(capturedValue)
		this.props.handleChange(this.props.componentName, capturedValue)
	},

	render: function(){
		return (
			<input type="text" value={this.props.value} onChange={this.invoke_makeChange} ref={this.props.componentName}/>
		)
	}
})

var PaymentOutput = React.createClass({
	render: function(){
		return (
			<p>{this.props.totalAmt}</p>
			)
	}
})

export default App