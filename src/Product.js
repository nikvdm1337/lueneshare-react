import React from 'react';
import { Card, Button, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
import './Product.css'
import {Col} from 'reactstrap'; 
import moment from 'moment'



export default class Product extends React.Component {

 
 
  render() {

    return (
          <Col xs={6}>
            <CardGroup onClick={ () => this.props.selectProductForFullscreenView(this.props.product._id)}>
              <Card className="product">
                <div className="TopImage" top width="100%" style={{ backgroundImage: `url(${this.props.product.file})` }}/>
                <CardBody>
                  <CardTitle className="producttitle">{this.props.product.title} - <span className="productcategory">{this.props.product.category.name}</span></CardTitle>
                  <CardSubtitle>von <span className="productauthor"> {this.props.product.author.name}</span> gepostet um <span className="date"> {moment(this.props.product.date).format('D MMM YY hh:mm A')} </span></CardSubtitle>
                  <div className="description">Beschreibung:</div>
                  <CardText>{this.props.product.description}</CardText>
                  <Button className="goToProduct">Zum Produkt</Button>
                </CardBody>
              </Card>
              </CardGroup>
              </Col>
    )
  }
}