import React from 'react';
import Product from './Product'
import './Product.css'

export default class ProductsMain extends React.Component {
  render() {
    return (
      <div className="productsmain row">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    )
  }
}