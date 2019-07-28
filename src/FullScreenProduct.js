import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Col } from 'reactstrap';
import moment from 'moment'

export const FullScreenProduct = (props) => {
    return (
        <Col sm={6} className="product">
        <CardGroup>
          <Card>
            <CardImg top width="100%" src={props.product.image} alt="Product image" />
            <CardBody>
              <CardTitle className="producttitle">{props.product.title} - <span className="productcategory">{props.product.category.name}</span></CardTitle>
              <CardSubtitle>von <span className="productauthor"> {props.product.author.name}</span> gepostet um <span className="date"> {moment(props.product.date).format('D MMM YY hh:m A')} </span></CardSubtitle>
              <div className="description">Beschreibung:</div>
              <CardText>{props.product.description}</CardText>
              <Button onClick={() => props.showAllProducts()}>Zurück</Button>
            </CardBody>
          </Card>
          </CardGroup>
          </Col>
    );
};

