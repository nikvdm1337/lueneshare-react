import React from 'react';
import Product from './Product'
import './Product.css'
import {FullScreenProduct} from './FullScreenProduct'
import axios from 'axios'
import './ProductsMain.css'

export default class ProductsMain extends React.Component {
	// Data
	constructor() {
	  super()
	  this.state = {
		showAll: true,
		selectedProduct: '',
		messages:[],
	  }
  }

	createMessage = (e, text) => {
		e.preventDefault()
		let message = {
			body: text,
		}
		axios.post(
			'http://localhost:2000/api/messages',
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

	selectProductForFullscreenView = (id) => {
		this.setState({
			showAll: false,
			selectedProduct: id
		})
		this.props.hideSidebar()
	}

	showAllProducts = () => {
		this.setState({
			showAll: true
		})
	}

	renderAll = () => {
		return (
			<div className="productsmain row">
				{
					this.props.products.map((m) => {
						return <Product selectProductForFullscreenView={this.selectProductForFullscreenView} product={m} key={m._id} />
					})
				}
			</div>
		)
	}
	renderSingle = () => {
		const chosenProduct = this.props.products.filter((product) => {
			return product._id === this.state.selectedProduct
		}) //Returns an array
		return (
			<FullScreenProduct 
			createMessage={this.createMessage}
			product={chosenProduct[0]} 
			showAllProducts={this.showAllProducts} 
			messages={this.props.messages}/>
		)
	}

	render () {
		const {showAll} = this.state
		return (
			showAll
				? this.renderAll()
				: this.renderSingle()
		)
	}
}