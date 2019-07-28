import React, {Component} from 'react';
import './App.css';
import NavbarMain from './NavMain';
import SidebarMain from './Sidebar';
import ProductsMain from './ProductsMain'
import {Container, Row, Col} from 'reactstrap'; 
import axios from 'axios';
import Submit from './Submit'




class App extends Component {
	// Data
	constructor() {
		super();
		this.state = {
			category:'',
			categories:[],
			products: [],
			newProduct: null,
			visible: false,
		};
	}

	componentDidMount() {
		axios.get(`http://localhost:2000/api/categories`).then((res) => {
			console.log(res.data)
			this.setState({
				categories: res.data
			})	
			
		}).catch((err) => {
			console.log('err', err)
		})
  }

  
	// Functions
	setCategory = (id) => {
		console.log('id', id)
		this.setState({
			category: id
		}, () => {
			console.log('categorySetState', this.state.category)
		}) 
	}

	
	createProduct = (obj) => {
		console.log('object!', obj)
		axios.post(
			`http://localhost:2000/api/products`,
			obj,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}
		).then((res) => {
			console.log('res', res)
			let products = this.state.products
			products.unshift(res.data)
			this.setState({products})
		}).catch((err) => {
			console.log('err', err)
		})
		console.log('state',this.state)
	
}
	// Render
	render() {
		return (

    <div className="megawrap">
     <NavbarMain sticky={'top'} auth={this.props.auth} />
     <Container>
      <Row>
        <Col sm={3}>
		{this.state.visible ? <Submit createProduct={this.createProduct} categories={this.state.categories} />:null}
		<button onClick={() => this.setState({visible: !this.state.visible})}>{this.state.visible ? "Ne doch nicht":"Stell was rein"}!</button>
			<SidebarMain
		 		setCategory={this.setCategory} 
				auth={this.props.auth} 
		 		categories={this.state.categories}
				 
			 />
			 
		</Col>
        <Col sm={9}> <ProductsMain category={this.state.category} setCategory={this.setCategory} /> </Col> 
		
      </Row>
    </Container>
    </div>
  );
}
}

export default App;
