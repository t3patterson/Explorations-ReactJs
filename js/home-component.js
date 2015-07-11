import React from 'react'

export class HomePage extends React.Component{ 
	constructor(props){
		super(props)
		this.myComponents = [
			{route: "google-maps", title:"Google Maps" },
			{route: "fixed-data-table", title: "Data Table"},
			{route: "react-select", title: "React Select"},
			{route: "react-date-picker", title: "Date Picker"},
			{route: "react-notification-system",title: "Notification System"}
		]
	}

	_makeList(components){
		return components.map((component)=>{
		 return <li><a href={`#/${component.route}`}>{component.title}</a></li>
		})
	}

	render(){
		return(
			<div className="homepage">
				<h1>React Components</h1>
				<ul>
					{this._makeList(this.myComponents)}
				</ul>
			</div>
			)
	}
}