import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
// import moment from 'moment'

class PrivateMessage extends Component {
    render() {
        return (
            <CardGroup>
            <Card>
              <CardBody sm={2}>
                <CardTitle className="userName"> User <span className="date"> Date  </span> </CardTitle>  
                <CardText className="textBody"> Text</CardText>
              </CardBody>
            </Card>
            </CardGroup>
        );
    }
}

export default PrivateMessage;