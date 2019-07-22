import React, {Component} from 'react';
import './App.css';
import NavbarMain from './NavMain';
import SidebarMain from './Sidebar';
import ProductsMain from './ProductsMain'
import {Container, Row, Col} from 'reactstrap'; 



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
	// Render
	render() {
		return (

    <div className="megawrap">
     <NavbarMain sticky={'top'}/>
     <Container>
      <Row>
        <Col sm={2}> <SidebarMain setCategory={this.setCategory} /> </Col>
        <Col sm={10}> <ProductsMain /> </Col> 
      </Row>
    </Container>
    </div>
  );
}
}

export default App;
