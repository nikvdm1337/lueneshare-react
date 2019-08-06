import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import Login from './Login'
import Logout from './Logout'
import './NavMain.css'
import NavLogo from './img/LogoSwag.svg'

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
      <Navbar>
        <Navbar.Brand href="/home">
		<img
        src={NavLogo}
        width="200"
        height="100"
        className="d-inline-block align-top navlogo"
		alt="Lüneshare Logo"
    	/>
		</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/profile">Mein Profil</Nav.Link>
            {this.checkAuth() ? null : <Nav.Link href="/signup">Registrier dich</Nav.Link>}
			<Nav.Link href="/pm">Nachrichten</Nav.Link>
            {this.checkAuth() ? <Logout /> : <Login auth={this.props.auth} />}
			{this.checkAuth() ? <p className="WelcomeMessage">Welcome, {this.props.user.name} !</p> : null}
          </Nav>
       </Navbar>		
  )
	}
}

export default NavMain