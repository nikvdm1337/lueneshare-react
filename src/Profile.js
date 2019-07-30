import React, { Component } from 'react';
import axios from 'axios'
import NavMain from './NavMain'

class Profile extends Component {
    state = {
        user: {}
    }

    getProfile = () => {
		axios.get('http://localhost:2000/api/profile', 
		{headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}}
		).then((res) => {
			console.log('profile',res.data)
			this.setState({
                user: res.data
			}, () => {
                console.log('profilestate', this.state)
            })
		}).catch((err) => {
			console.log('err', err)
		})
    }

    componentWillMount() {
        this.getProfile()
    }

    render() {
        return (
            <div>
            <NavMain />
                <ul>
                    <li>{this.state.user.name}</li>
                    <li>{this.state.user.email}</li>
                </ul>
            </div>
        );
    }
}

export default Profile;