import React, {Component} from 'react';
import './App.css';
import NavbarMain from './NavMain';
import SidebarMain from './Sidebar';
import ProductsMain from './ProductsMain'
import {Container, Row, Col, Button, Spinner} from 'reactstrap'; 
import axios from 'axios';
import Submit from './Submit'
import Footer from './Footer'


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
			messages: [],
			showSidebar: true,
			isSpinner: false
		};
	}
	// Functions

	hideSidebar = () => {
		this.setState({
			showSidebar: false
		})
	}

	getAllCategories= () => {
		axios.get(`http://localhost:2000/api/categories`).then((res) => {
			this.setState({
				categories: res.data
			})	
			
		}).catch((err) => {
			console.log('err', err)
		})
	}


	getAllMessages = () => {
		axios.get('http://localhost:2000/api/messages').then((res) => {
			console.log('messages', res.data)
			this.setState({
				messages: res.data
			});
			
		}).catch((err) => {
			console.log('err', err)
		})
	}

	setCategory = (id) => {
		this.setState({
			category: id
		}, () => this.getProductsForCategory())
	}

	getAllProducts = () => {
		axios.get(`http://localhost:2000/api/products`).then((res) => {
			this.setState({
				products: res.data
			})	
			
		}).catch((err) => {
			console.log('err', err)
		})
	}

	getProductsForCategory = () => {
		axios.get(`http://localhost:2000/api/products?category=${this.state.category}`).then((res) => {
			this.setState({
				products: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
  }

	
	createProduct = (obj) => {
		this.setState({
			isSpinner:true,
		})
		let form_holder = new FormData()
		form_holder.append('category', obj.category)
		form_holder.append('title', obj.title)
		form_holder.append('description', obj.description)
		form_holder.append('file', obj.file)

		// console.log('form_holder',form_holder)
		
		axios.post(
			`http://localhost:2000/api/products`,
			form_holder,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}
		).then((res) => {
			console.log('res', res)
			console.log('sent file', obj.file.name)
			let products = this.state.products
			products.unshift(res.data)
			this.setState({products})
			this.setState({
				isSpinner: false,
			})
			this.getProductsForCategory()
		}).catch((err) => {
			console.log('err', err)
		})
	
	}

	toggleSubmitForm = () => {
		this.setState({
			visible: !this.state.visible
		})
	}
	componentDidMount() {
		this.getAllCategories()
		this.getAllProducts()
		this.getAllMessages()
	}

	// Render
	render() {
		return (

    <div className="megawrap">
     <NavbarMain sticky={'top'} auth={this.props.auth} />
     <Container>
      <Row className="containerSideNavAndProducts">
        <Col sm={2}>
		{this.state.visible ? <Submit toggleSubmitForm={this.toggleSubmitForm} visible={this.state.visible} createProduct={this.createProduct} categories={this.state.categories} />:null}
		<Button className="toggleSubmitButton" onClick={ this.toggleSubmitForm }>{this.state.visible ? "Ne doch nicht":"Stell was rein"}!</Button>
		{this.state.isSpinner === true ? <Spinner color="success" /> : null}
				<SidebarMain
		 		setCategory={this.setCategory} 
				auth={this.props.auth} 
		 		categories={this.state.categories}
				 
			 	/>
				
			
			 
		</Col>
        <Col sm={	10}> <ProductsMain 
					category={this.state.category} 
					products={this.state.products} 
					messages={this.state.messages} 
					hideSidebar={this.hideSidebar} 
						
					/> 
		</Col> 
		
      </Row>
    </Container>
	<Footer />
    </div>
  );
}
}

export default App;
