import React, {Component} from 'react'
import { Nav } from 'react-bootstrap';

class Category extends Component {
	// Data
	
	// Functions
	

	// Render
	render() {
		return (
			<Nav.Link onClick={() => this.props.setCategory(this.props.categoryID)}>{this.props.category.name}</Nav.Link>
		)
	}
}

export default Category
