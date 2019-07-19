import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Sidebar.css'

export default class SidebarMain extends React.Component {
  render() {
    return (
      <div className="SidebarMain">
        <p>Share mich hart!</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}