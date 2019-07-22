import React, {Component} from 'react'
import axios from 'axios'
import SubmitNav from './SubmitNav'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import App from './App'


class Submit extends Component {
	state = {
		categories: []
	}
	// Lifecycle
	componentDidMount() {
		axios.get(`http://localhost:2000/api/categories`).then((res) => {
			console.log(res.data)
			this.setState({
				categories: res.data
			})	
			
		}).catch((err) => {
			console.log('err', err)
		})
  }
    //Render
    render() {
    return (
            <Form>
            <SubmitNav />
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>Titel</Label>
                <Col sm={5}>
                  <Input type="text" name="Title" placeholder="Trag 'nen Titel ein" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" sm={2}>Wähle eine Kategorie</Label>
                <Col sm={5}>
                  <Input type="select" name="select" id="exampleSelect">
                  {
						    this.state.categories.map((c) => {  
							return <option category={c} key={c._id} setCategory={this.props.setCategory} categoryID={c._id} />
						})
					}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={2}>Beschreibung</Label>
                <Col sm={5}>
                  <Input type="textarea" name="text" id="exampleText" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleFile" sm={2}>Lad' ein Bild hoch</Label>
                <Col sm={5}>
                  <Input type="file" name="file" id="exampleFile" />
                  <FormText color="muted">
                    Nur im .jpg oder .png Format und kleiner als 1 mb.
                  </FormText>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 5, offset: 2 }}>
                  <Button>Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          );
  } 
}

export default Submit