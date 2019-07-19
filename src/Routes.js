import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Login'
import App from './App'
import Signup from './Signup'

class Routes extends Component {
	// Data

	// Render
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={() => <Login />} />
					<Route path="/signup" component ={() => <Signup />} />
                    <Route path="/" component={() => <App />} />
					
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes