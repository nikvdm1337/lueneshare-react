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
  
  addFile = (e) => {
		this.setState({
			file: e.target.files[0]
		})
	}

	signup = (e, file) => {
    e.preventDefault()
    let form_holder = new FormData()
		form_holder.append('name', this.state.name)
		form_holder.append('email', this.state.email)
    form_holder.append('city', this.state.city)
    form_holder.append('password', this.state.password)
    form_holder.append('file', file)
    
		axios.post('http://localhost:2000/api/signup', form_holder).then((res) => {
			localStorage.setItem('token', res.data.token)
			this.props.auth()
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
                <h3>Registriere dich bei LueneShare!</h3 >
                  <form onSubmit={(e) => this.signup(e)}>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Nickname..." value={this.state.name} onChange={(e) => this.changeName(e)} />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email..." value={this.state.email} onChange={(e) => this.changeEmail(e)} />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password..." value={this.state.password} onChange={(e) => this.changePassword(e)} />
                    </div>
                    <div className="form-group">
                    <input type="file" name="file" onChange={this.addFile}/>
                    </div>
                    <div className="form-group">
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