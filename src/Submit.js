import React, {Component} from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Submit extends Component {
  constructor() {
    super();
    
    this.state = {
      title:'',
      description: '',
      category: '',
    }
  }
	// Lifecycle
  componentDidUpdate(prevProps) {
    if (this.props.categories !== prevProps.categories) {
      this.setState({
        category: (this.props.categories[0] && this.props.categories[0].name) || []
      })
    } 
  }

    //Render
    render() {
    return (
            <Form 
              onSubmit={(e) => {
                e.preventDefault();
                this.props.createProduct({
                  title: this.state.title, 
                  description: this.state.description, 
                  category:this.state.category
                  })
                }
              }
            >

              <FormGroup row>
                <Label for="exampleEmail" sm={2}>Titel</Label>
                <Col sm={5}>
                  <Input type="text" name="Title" placeholder="Trag 'nen Titel ein" onChange={(e) => this.setState({title:e.target.value})}/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" sm={2}>Wähle eine Kategorie</Label>
                <Col sm={5}>
                  <Input type="select" name="select" id="exampleSelect" onChange={(e)=> this.setState({category:e.target.value}) }>
                  {
						   this.props.categories && this.props.categories.map((c) => {  
							return <option category={c} key={c._id}> {c.name} </option>
						})
					}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={2}>Beschreibung</Label>
                <Col sm={5}>
                  <Input type="textarea" name="text" id="exampleText" onChange={(e) => this.setState({description:e.target.value})} />
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