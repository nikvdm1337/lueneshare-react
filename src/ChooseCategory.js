import React, {Component} from 'react'
import { option } from 'react-bootstrap';

class ChooseCategory extends Component {
	// Data
	
	// Functions

	// Render
	render() {
		return (
			<option 
				onClick={(e) => this.props.setCategory(this.props.category._id)}>
				{this.props.category.name}
			</option>
		)
	}
}

export default ChooseCategory
