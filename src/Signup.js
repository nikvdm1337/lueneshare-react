import React, {Component} from 'react'

import './Signup.css'

class Signup extends Component {
	// Data
    // Functions

	// Render
	render() {
	
        return (
        <div id="signup">
          <div className="row">
            <div className="col-4 offset-4">
              <div className="card signup">
                <div className="card-body">
                <h3>Registriere dich bei LueneShare!</h3 >
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Nickname..."  />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email..."  />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password..."  />
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