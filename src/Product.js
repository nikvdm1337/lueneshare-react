import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
import './Product.css'
import {Col} from 'reactstrap'; 
import moment from 'moment'



export default class Product extends React.Component {
 
  
componentDidMount() {
  console.log(this.props.product)
}
  render() {
    return (
          
          <Col sm={6} className="product">
            <CardGroup>
              <Card>
                <CardImg top width="100%" src={this.props.product.image} alt="Product image" />
                <CardBody>
                  <CardTitle>{this.props.product.title} @ {this.props.product.category}</CardTitle>
                  <CardSubtitle>von {this.props.product.author.name}  gepostet um   {moment(this.props.product.date).format('D MMM YY hh:m A')}</CardSubtitle>
                  <CardText>{this.props.product.description}</CardText>
                  <Button>Zum Produkt</Button>
                </CardBody>
              </Card>
              </CardGroup>
              </Col>
            
             
              
           
              

    )
  }
}