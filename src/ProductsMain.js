import React from 'react';
import Product from './Product'
import './Product.css'
import axios from 'axios'

export default class ProductsMain extends React.Component {
  // Data
	constructor() {
		super();
		this.state = {
			products:[],
		};
  }
  componentDidMount() {
		axios.get(`http://localhost:2000/api/products`).then((res) => {
			console.log(res.data)
			this.setState({
				products: res.data
			})	
			
		}).catch((err) => {
			console.log('err', err)
		})
  }
  render() {
    return (
      <div className="productsmain row">
					{
						this.state.products.map((m) => {
							return <Product product={m} key={m._id} />
						})
					}
      </div>
    )
  }
}