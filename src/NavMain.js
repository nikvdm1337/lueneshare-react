import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import Login from './Login'

class NavMain extends Component {
	// Data
	
	// Functions
	

	// Render
	render() {
		return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">LüneShare</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/submit">Stell' was rein!</Nav.Link>
            <Nav.Link href="/profil">Mein Profil</Nav.Link>
            <Nav.Link href="/signup">Registrier dich</Nav.Link>
            <Login />
          </Nav>
       </Navbar>		
  )
	}
}

export default NavMain