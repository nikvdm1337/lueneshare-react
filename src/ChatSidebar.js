import React from 'react';
import './Sidebar.css'
import {Nav, NavItem} from 'reactstrap'
import Recipient from './Recipient'
 
export default class ChatSidebar extends React.Component {

  	// Data
	// Lifecycle

  
  render() {
    return (
      <div className="SidebarMain">
        <Nav vertical>
				  <h3 className="categorySidebar">Message</h3>
				    <NavItem>
                <Recipient />
                <Recipient />
                <Recipient />
                <Recipient />
				    </NavItem>
        </Nav>
      </div>
    );
  }
}