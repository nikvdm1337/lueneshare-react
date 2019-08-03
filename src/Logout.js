import React, {Component} from 'react'


class Logout extends Component {
// Function
logout = (e) => {
    localStorage.removeItem('token')
    
}

    render() {
        return (
            <form onSubmit={(e) => this.logout(e)}>
            <button type="submit" className="btn btn-success">Logout</button>
            </form>
        )
    }
}

export default Logout