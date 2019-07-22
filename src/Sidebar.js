import React from 'react';
import './Sidebar.css'
import axios from 'axios'
import Category from './Category'
import {Nav, NavItem} from 'reactstrap'
 
export default class SidebarMain extends React.Component {

  	// Data
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
  
  render() {
    return (
      <div className="SidebarMain">
        <Nav vertical>
				  <h3>Types of Food</h3>
				    <NavItem>
            {
						    this.state.categories.map((c) => {
							return <Category category={c} key={c._id} setCategory={this.props.setCategory} categoryID={c._id} />
						})
					}
				</NavItem>
        </Nav>
      </div>
    );
  }
}