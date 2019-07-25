import React, {Component} from 'react'
import { option } from 'react-bootstrap';

class ChooseCategory extends Component {
	// Data
	// Functions
	componentWillMount() {
		console.log(this.props.categories)
	}

	// Render
	render() {
		return (
			<option> onClick={() => this.props.setCategory(this.props.categoryid)}>{this.props.categories.name}</option>
		)
	}
}

export default ChooseCategory
