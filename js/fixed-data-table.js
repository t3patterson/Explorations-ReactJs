var React = require('react');
var FixedDataTable = require('fixed-data-table');

var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;


class ExampleImg extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
				<button>HIIIIII!</button>
			</div>
			)
	}

}

function renderButton(cellData){
	return <div><img className="tnail" src={cellData}/></div>
}

export class MyDataTable extends React.Component{
	constructor(props){
		super(props)
		this.props.rows = [
		  ['https://avatars3.githubusercontent.com/u/7632025?v=3&s=460', 'b1', 'c1'],
		  ['a', 'b3', 'c2'],
		  ['Ø', 'b3', 'c3'],
		];
	}

	rowGetter(rowIndex) {
		return this.props.rows[rowIndex];
	}

	render(){
		console.log(this.props.rows)
		return(
			<div>
				<Table
			    rowHeight={70}
			    rowGetter={this.rowGetter.bind(this)}
			    rowsCount={this.props.rows.length}
			    width={900}
			    height={750}
			    headerHeight={50}
			    >

				    <Column
				      label="Avatar"
				      width={100}
				      dataKey={0}
				      //pass this function with a component to render html DOM
			    	  cellRenderer={renderButton}

				    />
				    <Column
				      label="User"
				      width={200}
				      dataKey={1}
				    />
				     <Column
				      label="Name"
				      width={200}
				      dataKey={2}
				    />
				     <Column
				      label="Location"
				      width={200}
				      dataKey={3}
				    />
				     <Column
				      label="Followers"
				      width={100}
				      dataKey={4}
				    />
				     <Column
				      label="Following"
				      width={100}
				      dataKey={5}
				    />



			  </Table>
		  </div>
		)


	}
}

  