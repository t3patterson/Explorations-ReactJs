export class HomePage extends React.Component{ 
	constructor(props){
		super(props)
		
		]
	}

	_makeList(components){
		return components.map((component)=>{
			var bgStyle = component.route

			var bgStyle = {
				background: `url('./images/${component.route}.jpg') center center no-repeat`
			}
		 return <li className="component" style={bgStyle}><a href={`#/${component.route}`}>{component.title}</a></li>
		})
	}

	render(){
		return(
			<div className="homepage">
				<h1>React Components</h1>
				<hr/>
				<ul>
					{this._makeList(this.myComponents)}
				</ul>
			</div>
			)
	}
}