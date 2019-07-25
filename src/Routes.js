import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Login'
import App from './App'
import Signup from './Signup'
import Submit from './Submit'

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
					<Route path="/submit" component = {() => <Submit auth={this.auth}/>} />
                    <Route path="/" component={() => <App auth={this.auth} />} />
					
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes