import React from 'react';
import './App.css';
import NavbarMain from './NavMain';
import SidebarMain from './Sidebar';
import ProductsMain from './ProductsMain'
import {Container, Row, Col} from 'reactstrap'; 




function App() {
  return (
    <div className="megawrap">
     <NavbarMain sticky={'top'}/>
     <Container>
      <Row>
        <Col sm={2}> <SidebarMain /> </Col>
        <Col sm={10}> <ProductsMain /> </Col> 
      </Row>
    </Container>
    </div>
  );
}

export default App;
