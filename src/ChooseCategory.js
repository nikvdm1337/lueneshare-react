import React, {Component} from 'react'
import { option } from 'react-bootstrap';

class Category extends Component {
	// Data
	
	// Functions
	componentWillMount() {
		console.log(this.props)
	}

	// Render
	render() {
		return (
			<option onClick={() => this.props.setCategory(this.props.categoryID)}>{this.props.category.name}</option>
		)
	}
}

export default Category
