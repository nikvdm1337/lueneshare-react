import React, { Component } from 'react';
import axios from 'axios'
import NavMain from './NavMain'
import { Col, Row } from 'reactstrap';

import './Profile.css'

class Profile extends Component {
    state = {
        user: {}
    }
    

    getProfile = () => {
		axios.get(`${process.env.REACT_APP_API}/api/profile`, 
		{headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}}
		).then((res) => {
			console.log('profile',res.data)
			this.setState({
                user: res.data
			}, () => {
                console.log('profilestate', this.state.user.profilepic)
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
            <div className="entireProfilePage">
            <NavMain />
            <div className="profileContainer">
                <Row>
                    <Col xs="4" className="ProfilePicture">
                    <h3>Mein Profilbild</h3>
                        <div className="profpic" 
                        style={{ backgroundImage: `url(${this.state.user.profilepic})` }}>
                        </div>
                    </Col>
                    <Col xs="4" className="ProfileContent">
                        <h2>Name:</h2>
                        <p>{this.state.user.name}</p>
                        <h2>E-Mail:</h2>
                        <p>{this.state.user.email}</p>
                        <h2>City:</h2>
                        <p>{this.state.user.city}</p>
                        
                    </Col>
                </Row>
            </div>
            </div>
        );
    }
}

export default Profile;