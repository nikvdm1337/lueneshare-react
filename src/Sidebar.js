import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Sidebar.css'

export default class SidebarMain extends React.Component {
  render() {
    return (
      <div className="SidebarMain">
        <h4>Wonach suchst du?</h4>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Frisch gekocht</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Kühlschrank plündern</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Hab' da was gefunden</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}