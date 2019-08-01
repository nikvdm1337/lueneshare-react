import React, { Component } from 'react';
import {Col, Row} from 'reactstrap'
import NavMain from './NavMain'
import NewMessage from './NewMessage'
import PrivateMessage from './PrivateMessage'
import ChatSidebar from './ChatSidebar';

class PrivateMessages extends Component {
    render() {
        return (
            <div>
                <NavMain />
            <Row>
                <Col sm={2}>
                <ChatSidebar />
                </Col>
                
                <Col sm={9} className="commentSection">
                    <h4>Deine Nachrichten</h4>
                <div id="messages">
                    <PrivateMessage/>
                    <PrivateMessage/>
                    <PrivateMessage/>
                    <PrivateMessage/>
				</div>
                <NewMessage />
            </Col>
            </Row>
            </div>
        );
    }
}

export default PrivateMessages;