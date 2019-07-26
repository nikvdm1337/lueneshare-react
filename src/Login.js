import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import './Login.css'

export default class Login extends React.Component {
  // Data
  constructor() {
		super();
	this.state = {
		email: '',
		password: '',
		error: ''
  }
}
	// Functions
	

	changeEmail = (e) => {
		this.setState({email: e.target.value})
	}

	changePassword = (e) => {
		this.setState({password: e.target.value})
	}

	login = (e) => {
		e.preventDefault()
		axios.post(`http://localhost:2000/api/login`, this.state).then((res) => {
			if (!res.data.token) {
				this.setState({
					error: res.data
				})
			} else {
				this.setState({
					error: ''
				})
				localStorage.setItem('token', res.data.token)
				this.props.auth()
			}
		}).catch((err) => {
			console.log('err!!!!', err)
		})
	}

  render() {
    return (
      <Form inline onSubmit={(e) => this.login(e)}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="E-Mail..." value={this.state.email} onChange={(e) => this.changeEmail(e)} />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Passwort..." value={this.state.password} onChange={(e) => this.changePassword(e)} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
