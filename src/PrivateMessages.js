import React, { Component } from 'react';
import {Col, Row} from 'reactstrap'
import NavMain from './NavMain'
import NewMessage from './NewMessage'
import PrivateMessage from './PrivateMessage'
import axios from 'axios'
import MyProduct from './MyProduct'

class PrivateMessages extends Component {

    constructor() {
        super();
    this.state = {
        user: {},
        products:[],
        selectedProduct:"5d3d7794038441269dfeafa2",
        messages:[],
    }
    }
    getAllMessages = () => {
		axios.get(`${process.env.REACT_APP_API}/api/messages?product=${this.state.selectedProduct}`).then((res) => {
			console.log('messages', res.data)
			this.setState({
				messages: res.data
			});
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

    setProductID = (id) => {
		this.setState({
			selectedProduct: id
        },console.log('id', this.state.selectedProduct),
        console.log(`${process.env.REACT_APP_API}/api/messages?product=${this.state.selectedProduct}`),
        console.log('messages',this.state.messages),
        this.getAllMessages())
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
                    {
						this.state.messages.map((m) => {
							return <PrivateMessage message={m} key={m._id} />
						})
					}
				</div>
                <NewMessage />
            </Col>
            </Row>
            </div>
        );
    }
}

export default PrivateMessages;