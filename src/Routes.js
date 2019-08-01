import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Login'
import App from './App'
import Signup from './Signup'
import Profile from './Profile'
import PrivateMessages from './PrivateMessages'
import LandingPage from './LandingPage'

class Routes extends Component {
	// Data
	state = {}
	// Functions
	checkAuth = () => {
		if (localStorage.getItem('token')) {
			return true
		} else {
			return false
		}
	}
	auth = () => {
		if (this.checkAuth()) {
			window.location.href = '/'
		}
	}
	// Render
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={() => <Login auth={this.auth} />} />
					<Route path="/signup" component ={() => <Signup auth={this.auth} />} />
					<Route path="/profile" component = {() => <Profile auth={this.auth}/>} />
					<Route path="/pm" component = {() => <PrivateMessages auth={this.auth}/>} />
                    <Route path="/lueneshare" component={() => <App auth={this.auth} />} />
					<Route path="/" component={() => <LandingPage />} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes