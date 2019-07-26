import React, {Component} from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ChooseCategory from './ChooseCategory'

class Submit extends Component {
  constructor() {
    super();
    
    this.state = {
      title:'',
      description: '',
      category: ''
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

  setCategory = (id) => {
		console.log('id', id)
		this.setState({
			category: id
		}, () => {
			console.log('categorySetState', this.state.category)
		}) 
	}

    //Render
    render() {
    return (
            <Form 
              onSubmit={(e) => {
                e.preventDefault();
                console.log('submit state', this.state)
                this.props.createProduct({
                  title: this.state.title, 
                  description: this.state.description, 
                  category: this.state.category
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
                 
                  <select>
                    {
                      this.props.categories && this.props.categories.map((c) => {  
                         return (<ChooseCategory setCategory={this.setCategory} categories={this.state.categories} category={c} key={c._id} />)
                       })
                    }
                  </select>


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