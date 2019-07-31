import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
import moment from 'moment'

class Message extends Component {
    render() {
        return (
            <CardGroup>
            <Card>
              <CardBody sm={2}>
                <CardTitle className="userName">{this.props.message.author.name} <span className="date"> {moment(this.props.message.date).format('D MMM YY hh:m A')} </span> </CardTitle>  
                <CardText className="textBody">{this.props.message.body}</CardText>
              </CardBody>
            </Card>
            </CardGroup>
        );
    }
}

export default Message;