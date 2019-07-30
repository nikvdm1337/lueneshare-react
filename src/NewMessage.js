import React, {Component} from 'react'
import './NewMessage.css'

class NewMessage extends Component {
	// Data
	state = {
		text: ''
	}

	// Functions
	changeText = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	clearMessage = () => {
		this.setState({
			text: ''
		})
	}

	// Render
	render() {
		return (
			<div id="new-message">
				<form onSubmit={(e) => {
						this.props.createMessage(e, this.state.text); this.clearMessage()}
					}>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="New Message..." value={this.state.text} onChange={(e) => this.changeText(e)} />
						<div className="input-group-append">
							<button type="submit" className="btn btn-success">Send</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default NewMessage