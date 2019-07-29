import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Row, Col } from 'reactstrap';
import moment from 'moment'
import './FullScreenProduct.css'

export const FullScreenProduct = (props) => {
  console.log(props.messages)
  console.log(props.product._id)
  console.log(props.hideSidebar)
    return (
        <Row className="productsingle">
        <Col>
        <CardGroup>
          <Card>
            <CardImg sm={6}top width="100%" src={props.product.image} alt="Product image" />
            <CardBody sm={6}>
              <CardTitle className="producttitle">{props.product.title} - <span className="productcategory">{props.product.category.name}</span></CardTitle>
              <CardSubtitle>von <span className="productauthor"> {props.product.author.name}</span> gepostet um <span className="date"> {moment(props.product.date).format('D MMM YY hh:m A')} </span></CardSubtitle>
              <div className="description">Beschreibung:</div>
              <CardText>{props.product.description}</CardText>
              <Button onClick={() => props.showAllProducts()}>Zurück</Button>
            </CardBody>
          </Card>
          </CardGroup>
          </Col>
          </Row>
    );
};

