import React from 'react';
import Product from './Product'
import './Product.css'

export default class ProductsMain extends React.Component {
  // Data

  render() {
    return (
      <div className="productsmain row">
					{
						this.props.products.map((m) => {
							return <Product product={m} key={m._id} />
						})
					}
      </div>
    )
  }
}