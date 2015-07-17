var React = require('react');

export class FullPageView extends React.Component{ 
	constructor(props){
		super(props)
		this.props.stylez = {
			width: 500,
			margin: "0 auto"
		}

		this.state = {message : "none"}
		console.log(this)
	}

	_fullPageAnchor(msg){
		console.log('full page picked up...now paging body')
		console.log(`message: ${msg}`)

		this.setState({
			message: msg
		})
	}

	render(){
		return(
			<div style={this.props.stylez}>
				<NavView relayToTopLevel={this._fullPageAnchor.bind(this)}/>
				<BodyView message4Nav={this.state.message} />
			</div>
			)
	}
}



class NavView extends React.Component{ 
	constructor(props){
		super(props)
	}

	_triggerClick(){
		console.log(this)
		console.log('marco')
		this.props.relayToTopLevel('marco')

	}
	render(){
		return(
			<div className="nav">
				<h4>Nav</h4>
				<p style={{textAlign: "right"}}>
					<button onClick={(x)=>{this._triggerClick(x)}} >+</button>
				</p>
				<hr/>
			</div>
			)
	}
}

class BodyView extends React.Component{ 
	constructor(props){
		super(props)
		this.state = {
			messageFromAbove: "listening"
		}
	}	

	componentWillReceiveProps(someProps){
		console.log('new props')
		this.setState({
			messageFromAbove: someProps.message4Nav
		})
	}


	_fromFullPage(){
		console.log('inside the body, sending to cb here')
		this._relayHere()
	}

	_relayHere(){
		console.log('polo')
	}

	render(){
		console.log(this.props.changingProps)
		return(
			<div className="body" style={ {background: '#eee', position: 'relative'}}>
				<h4>Body</h4>
				<ul>
					<li>Paul</li>
					<li>Michael</li>
					<li>Ben</li>
					<li>Toni</li>
				</ul>
				<NavListViewInBody lastLeg={this.state.messageFromAbove}/>
			</div>
			)
	}
}


class NavListViewInBody extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			menuStatus : false
		}

		this.props.stylez= {
			background: 'lightblue',
			position: 'absolute',
			top: 0,
			right: 0,
			zIndex: 5,
			width: 200,
			height: 150

		}
	}


	componentWillReceiveProps(someProps){
		console.log(someProps.lastLeg)

		this.state.menuStatus ? this.setState({menuStatus: false}) : this.setState({menuStatus: true})
		
		console.log('menu status...')
		console.log(this.state.menuStatus)
	}


	render(){
		return (
			<nav style={this.props.stylez}>
				<h6>= Go to home =</h6>
				<h6>= Pending Items =</h6>
				<h6>= A map of shit =</h6>
			</nav>
		)
	}
	
}
