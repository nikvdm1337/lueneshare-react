import React, { Component } from 'react';
import {Col, Row} from 'reactstrap'
import NavMain from './NavMain'
import NewMessage from './NewMessage'
import PrivateMessage from './PrivateMessage'
import axios from 'axios'
import MyProduct from './MyProduct'

class PrivateMessages extends Component {

    state = {
        user: {},
        products:[],
        selectedProduct:''
    }

    setProductID = (id) => {
		this.setState({
			selectedProduct: id
		}, () => console.log(id))
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

    componentWillMount() {
        this.getProfile()
    }

    render() {
        return (
            <div>
                <NavMain />
            <Row>
                <Col sm={2}>
                <h2>Meine Produkte:</h2>
                        <ul>
                             {
                                this.state.products.map((p) => {
                                    return <MyProduct setProductID={this.setProductID} key={p._id} product={p} />
                                })
                            }
                         </ul>
                </Col>
                
                <Col sm={9} className="commentSection">
                    <h4>Deine Nachrichten</h4>
                <div id="messages">
                    <PrivateMessage/>
                    <PrivateMessage/>
				</div>
                <NewMessage />
            </Col>
            </Row>
            </div>
        );
    }
}

export default PrivateMessages;