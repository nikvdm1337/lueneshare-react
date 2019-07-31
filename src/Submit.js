import React, {Component} from 'react'
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ChooseCategory from './ChooseCategory'
import './Submit.css'

class Submit extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title:'',
      description: '',
      category: this.props.categories[0]._id || '',
      file:'https://screenshotlayer.com/images/assets/placeholder.png',
    }
  }
  

  setCategory = (id) => {
		this.setState({
			category: id
		})
  }
  
  addFile = (e) => {
		this.setState({
			file: e.target.files[0]
		})
	}

  checkAuth = () => {
		if (localStorage.getItem('token')) {
			return true
		} else {
			return false
		}
	}

    //Render
    render() {
    return (
      <Modal isOpen={this.props.visible} toggle={this.props.toggleSubmitForm} className={this.props.className}>
       <Form className="submitform" 
              onSubmit={(e) => {
                e.preventDefault();
                this.props.createProduct({
                  title: this.state.title, 
                  description: this.state.description, 
                  category: this.state.category,
                  file: this.state.file
                  
                  });
                  this.props.toggleSubmitForm()
                }
              }
            >
      <ModalHeader toggle={this.toggle}>Stell' was rein!</ModalHeader>
      <ModalBody>
     

              <FormGroup row>
                <Label for="exampleEmail" sm={2}>Stell' was rein!</Label>
                <Col sm={5}>
                  <Input type="text" name="Title" placeholder="Trag 'nen Titel ein" onChange={(e) => this.setState({title:e.target.value})}/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" sm={2}>Kategorie</Label>
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
                  <Input type="textarea" placeholder="Beschreibe, was du anzubieten hast" name="text" id="submitdescr" onChange={(e) => this.setState({description:e.target.value})} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={2}>Bild</Label>
                <Input type="file" name="file" onChange={this.addFile}/>
              </FormGroup>
                
            </ModalBody>
      <ModalFooter>
        {this.checkAuth() ? 
        <Button type="submit" className="submitProductButton">Abschicken</Button>
        :<Button variant="secondary" disabled>Meld dich erst an</Button>}
        <Button color="secondary" onClick={this.props.toggleSubmitForm}>Abbrechen</Button>
      </ModalFooter>
      </Form>
    </Modal>
          
          );
  } 
}

export default Submit