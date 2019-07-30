import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';

class Message extends Component {
    render() {
        return (
            <CardGroup>
            <Card>
              <CardBody sm={2}>
                <CardTitle className="userName">{this.props.message.author} <span className="date"> {this.props.message.date} </span> </CardTitle>  
                <CardText className="textBody">{this.props.message.body}</CardText>
              </CardBody>
            </Card>
            </CardGroup>
        );
    }
}

export default Message;