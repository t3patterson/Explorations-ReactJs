var React = require('react')


var App = React.createClass({

	getInitialState: function(){
		return {
			amount1 : 0,
			amount2 : 0,
		}
	},

	makeStateChange: function(refName, val){
		console.log('----------------------')
		console.log('appppp level lthissener')

		console.log(refName)

		this.setState({
			amount1: refName==="amount1" ? val : this.state.amount1 ,
			amount2: refName==="amount2" ? val : this.state.amount2
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
				<PaymentInput handleChange = {this.makeChange} refName={"amount" + (++amt)}/> 
				<PaymentInput handleChange = {this.makeChange} refName={"amount" + (++amt)}/> 
 				<hr/>
 				<PaymentOutput totalAmt = {totalOfBoth} />
			</div>
		)
	}

})

var PaymentInput = React.createClass({
	captureValuee: function(evt){

		var propsRefName = this.props.refName
		var capturedValue = this.refs[propsRefName].getDOMNode().value
		this.props.makeSateChange(this.props.refName, capturedValue)
	},

	render: function(){
		return (
			<input type="text" value={this.props.value} onChange={this.captureValues} ref={this.props.refName}/>
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