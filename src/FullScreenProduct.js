import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Row, Col } from 'reactstrap';
import moment from 'moment'
import './FullScreenProduct.css'
import CommentSection from './CommentSection'

export const FullScreenProduct = (props) => {
  console.log(props.messages)
  console.log(props.product._id)

    return (
        <Row className="productsingle">
        <Col sm={5}>
        <CardGroup>
          <Card>
            <CardBody sm={2}>
            <CardImg sm={2}top width="100%" src={props.product.file} alt="Product image" />
              <CardTitle className="producttitle">{props.product.title} - <span className="productcategory">{props.product.category.name}</span></CardTitle>
              <CardSubtitle>von <span className="productauthor"> {props.product.author.name}</span> gepostet um <span className="date"> {moment(props.product.date).format('D MMM YY hh:m A')} </span></CardSubtitle>
              <div className="description">Beschreibung:</div>
              <CardText>{props.product.description}</CardText>
              <Button onClick={() => props.showAllProducts()}>Zurück</Button>
            </CardBody>
          </Card>
          </CardGroup>
          </Col>
          <CommentSection messages={props.messages} createMessage={props.createMessage}/>
          </Row>
    );
};

