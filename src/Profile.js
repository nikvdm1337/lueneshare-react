import React, { Component } from 'react';
import axios from 'axios'
import NavMain from './NavMain'
import { Col, Row } from 'reactstrap';
import MyProduct from './MyProduct'
import './Profile.css'

class Profile extends Component {
    state = {
        user: {},
        products:[],
        selectedProduct:''
    }
    
    getProductsForMyProfile = () => { 
        axios.get(`${process.env.REACT_APP_API}/api/products?author=${this.state.user._id}`, 
        {headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}}
        ).then((res) => {
            this.setState({
                products: res.data
            }, () => console.log('products', this.state.products))
        }).catch((err) => {
            console.log('err', err)
        })
    }
    getProfile = () => {
		axios.get(`${process.env.REACT_APP_API}/api/profile`, 
		{headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}}
		).then((res) => {
			this.setState({
                user: res.data
			}, () => {
                this.getProductsForMyProfile()
            })
		}).catch((err) => {
			console.log('err', err)
		})
    }

    setProductID = (id) => {
		this.setState({
			selectedProduct: id
		}, () => console.log(id))
	}

    componentWillMount() {
        this.getProfile()
    }

    render() {
        return (
            <div className="entireProfilePage">
            <NavMain user={this.state.user} />
            <div className="profileContainer">
                <Row>
                    <Col sm="2" className="ProfilePicture">
                    <h3>Mein Profil</h3>
                        <div className="profpic" 
                        style={{ backgroundImage: `url(${this.state.user.profilepic})` }}>
                        </div>
                        <h2>Name:</h2>
                        <p>{this.state.user.name}</p>
                        <h2>E-Mail:</h2>
                        <p>{this.state.user.email}</p>
                        <h2>City:</h2>
                        <p>{this.state.user.city}</p>
                    </Col>
                    <Col xs="2" className="ProfileContent">
                        <h2>Meine Produkte:</h2>
                        <ul>
                        {
                                this.state.products.map((p) => {
                                    return <MyProduct setProductID={this.setProductID} key={p._id} product={p} />
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </div>
            </div>
        );
    }
}

export default Profile;