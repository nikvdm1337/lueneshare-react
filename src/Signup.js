import React, {Component} from 'react'
import axios from 'axios'
import './Signup.css'

class Signup extends Component {
// Data
	state = {
		name: '',
		email: '',
    password: '',
    city:'',
    file:'',
  }
  
	// Functions
	changeName = (e) => {
		this.setState({name: e.target.value})
	}

	changeEmail = (e) => {
		this.setState({email: e.target.value})
	}

	changePassword = (e) => {
		this.setState({password: e.target.value})
  }
  
  changeCity = (e) => {
		this.setState({city: e.target.value})
  }
  


	signup = (e) => {
    e.preventDefault()
		axios.post(`${process.env.REACT_APP_API}/api/signup`, this.state).then((res) => {
			localStorage.setItem('token', res.data.token)
      this.props.auth()
      window.location.href='/home'
		}).catch((err) => {
			console.log('err', err)
		})
	}
	// Render
	render() {
	
        return (
        <div id="signup">
          <div className="row">
            <div className="col-4 offset-4">
              <div className="card signup">
                <div className="card-body">
                <h3>Registriere dich bei LÜNESHARE</h3 >
                  <form onSubmit={(e) => this.signup(e)}>
                    <div className="form-group signupform">
                      <input type="text" className="form-control" placeholder="Nickname..." value={this.state.name} onChange={(e) => this.changeName(e)} />
                    </div>
                    <div className="form-group signupform">
                      <input type="email" className="form-control" placeholder="Email..." value={this.state.email} onChange={(e) => this.changeEmail(e)} />
                    </div>
                    <div className="form-group signupform">
                      <input type="password" className="form-control" placeholder="Password..." value={this.state.password} onChange={(e) => this.changePassword(e)} />
                    </div>
                    <div className="form-group signupform">
                      <input type="text" className="form-control" placeholder="Dein Ort.." value={this.state.city} onChange={(e) => this.changeCity(e)} />
                    </div>
                    <button type="submit" className="btn btn-success">Signup</button>
                  </form>
                </div>
              </div>
            </div>
          </div>	
        </div>
        )
      }
		
	
}

export default Signup