import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import Login from './Login'
import Logout from './Logout'

class NavMain extends Component {
	// Data
	state = {
    isLoggedIn: false
  }
	// Functions
	checkAuth = () => {
		if (localStorage.getItem('token')) {
			return true
		} else {
			return false  
		}
	}
	// Render
	render() {
		return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">LüneShare</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/submit">Stell' was rein!</Nav.Link>
            <Nav.Link href="/profil">Mein Profil</Nav.Link>
            <Nav.Link href="/signup">Registrier dich</Nav.Link>
            {this.checkAuth() ? <Logout /> : <Login auth={this.props.auth} />}
          </Nav>
       </Navbar>		
  )
	}
}

export default NavMain