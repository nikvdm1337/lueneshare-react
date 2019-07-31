import React, { Component } from 'react';
import './CommentSection.css'
import { Col } from 'reactstrap';
import Message from './Message'
import NewMessage from './NewMessage'


class CommentSection extends Component {

    state = {
        messages: this.props.messages,
        showNewMessage: false,
    }
    
    checkAuth = () => {
		if (localStorage.getItem('token')) {
			this.setState({
                showNewMessage: true,
            })
		} else {
			return false
		}
    }

    componentDidMount() {
        this.checkAuth()
    }
    
    render() {
        console.log(this.state.messages)
        return (
            <Col sm={5} className="commentSection">
            <h4>Kommentare</h4>
            <div id="messages">
					{
						this.state.messages.map((m) => {
							return <Message message={m} key={m._id} />
						})
					}
				</div>
                {this.state.showNewMessage ? <NewMessage createMessage={this.props.createMessage} /> : null}
            </Col>
            
        );
    }
}

export default CommentSection;