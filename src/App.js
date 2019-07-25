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
		};
	}

	// Functions
	setCategory = (id) => {
		this.setState({
			category: id
		})
		console.log('pressed link')
	}

	createProduct = (e, obj) => {
		e.preventDefault()
		axios.post(
			`http://localhost:2000/api/products`,
			obj,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}
		).then((res) => {
			let products = this.state.products
			products.unshift(res.data)
			this.setState({products})
		}).catch((err) => {
			console.log('err', err)
		})
	}
	// Render
	render() {
		return (

    <div className="megawrap">
     <NavbarMain sticky={'top'}/>
     <Container>
      <Row>
        <Col sm={2}> <SidebarMain setCategory={this.setCategory} auth={this.props.auth}/> </Col>
        <Col sm={10}> <ProductsMain  /> </Col> 
		<Submit createProduct={this.createProduct}/>
      </Row>
    </Container>
    </div>
  );
}
}

export default App;
