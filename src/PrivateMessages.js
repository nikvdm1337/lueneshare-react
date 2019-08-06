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
        selectedProduct:"",
        messages:[],
     }
    }

    createMessage = (e, text) => {
		e.preventDefault()
		let message = {
			body: text,
			product: this.state.selectedProduct
		}
		axios.post(
			`${process.env.REACT_APP_API}/api/messages`,
			message,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}
		).then((res) => {
			let messages = this.state.messages
			messages.unshift(res.data)
			this.setState({messages})
		}).catch((err) => {
			console.log('err', err)
		})
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
                products: res.data,
                selectedProduct: res.data[0]._id
            }, () => this.getAllMessages())
        }).catch((err) => {
            console.log('err', err)
        })
    }

    setProductID = (id) => {
		this.setState({
			selectedProduct: id
        }, () => {
            this.getAllMessages()
        })
    }

    componentDidMount() {
        this.getProfile()
    }

    render() {
        return (
            <div>
                <NavMain user={this.state.user} />
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
                <NewMessage createMessage={this.createMessage} />
            </Col>
            </Row>
            </div>
        );
    }
}

export default PrivateMessages;