import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
import './Product.css'
import {Col} from 'reactstrap'; 
import moment from 'moment'



export default class Product extends React.Component {
 
  render() {
    return (
  
          <Col sm={6} className="product">
            <CardGroup>
              <Card>
                <CardImg top width="100%" src={this.props.product.file} alt="Product image" />
                <CardBody>
                  <CardTitle className="producttitle">{this.props.product.title} - <span className="productcategory">{this.props.product.category.name}</span></CardTitle>
                  <CardSubtitle>von <span className="productauthor"> {this.props.product.author.name}</span> gepostet um <span className="date"> {moment(this.props.product.date).format('D MMM YY hh:mm A')} </span></CardSubtitle>
                  <div className="description">Beschreibung:</div>
                  <CardText>{this.props.product.description}</CardText>
                  <Button onClick={ () => this.props.selectProductForFullscreenView(this.props.product._id) } className="goToProduct">Zum Produkt</Button>
                </CardBody>
              </Card>
              </CardGroup>
              </Col>
    )
  }
}