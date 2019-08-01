import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Row, Col } from 'reactstrap';
import moment from 'moment'
import './FullScreenProduct.css'
import CommentSection from './CommentSection'
import axios from 'axios'

class FullScreenProduct extends React.Component {

  state = {
    messages: []
  }

  getAllMessages = () => {
		axios.get(`${process.env.REACT_APP_API}/api/messages?product=${this.props.product._id}`).then((res) => {
			console.log('messages', res.data)
			this.setState({
				messages: res.data
			});
			
		}).catch((err) => {
			console.log('err', err)
		})
  }
  
  componentDidMount() {
    this.getAllMessages()
  }
  
  

  render() {
    return (
      <Row className="productsingle">
        <Col sm={5}>
        <CardGroup>
          <Card>
          <Button className="onFullScreenButton">Schreibe mir</Button>
            <CardBody sm={2}>
            <CardImg sm={2}top width="100%" src={this.props.product.file} alt="Product image" />
              <CardTitle className="producttitle">{this.props.product.title} - <span className="productcategory">{this.props.product.category.name}</span></CardTitle>
              <CardSubtitle>von <span className="productauthor"> {this.props.product.author.name}</span> gepostet um <span className="date"> {moment(this.props.product.date).format('D MMM YY hh:mm A')} </span></CardSubtitle>
              <div className="description">Beschreibung:</div>
              <CardText>{this.props.product.description}</CardText>
              <Button className="onFullScreenButton" onClick={() => this.props.showAllProducts()}>Zurück</Button>
            </CardBody>
          </Card>
          </CardGroup>
          </Col>
          <CommentSection messages={this.state.messages} createMessage={this.props.createMessage}/>
          </Row>
    )
  }
}
        
export default FullScreenProduct
