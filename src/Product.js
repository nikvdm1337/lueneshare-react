import React from 'react';
import { Card, Button, CardTitle, CardText,
 CardSubtitle, CardBody } from 'reactstrap';
import './Product.css'
import {Col} from 'reactstrap'; 
import moment from 'moment'



export default class Product extends React.Component {

 
 
  render() {

    return (
          <Col xs={4}>
            
              <Card className="product" onClick={ () => this.props.selectProductForFullscreenView(this.props.product._id)}>
                <div className="TopImage" top width="100%" style={{ backgroundImage: `url(${this.props.product.file})` }}/>
                <CardBody>
                  <CardTitle className="producttitle">{this.props.product.title} - <span className="productcategory">{this.props.product.category.name}</span></CardTitle>
                  <CardSubtitle>
                    von: <strong>{this.props.product.author.name}</strong>
                    <span className="date">gepostet um: {moment(this.props.product.date).format('D MMM YY hh:mm A')}</span>
                  </CardSubtitle>
                  <CardText>Beschreibung: {this.props.product.description}</CardText>
                  <Button className="goToProduct">Zum Produkt</Button>
                </CardBody>
              </Card>
             
              </Col>
    )
  }
}