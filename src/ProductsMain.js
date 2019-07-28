import React from 'react';
import Product from './Product'
import './Product.css'
import {FullScreenProduct} from './FullScreenProduct'

export default class ProductsMain extends React.Component {
	// Data
	constructor() {
	  super()
	  this.state = {
		showAll: true,
		selectedProduct: '',
	  }
  }

	selectProductForFullscreenView = (id) => {
		this.setState({
			showAll: false,
			selectedProduct: id
		})
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
			<FullScreenProduct product={chosenProduct[0]} showAllProducts={this.showAllProducts}/>
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