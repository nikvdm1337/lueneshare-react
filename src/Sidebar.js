import React from 'react';
import './Sidebar.css'
import Category from './Category'
import {Nav, NavItem} from 'reactstrap'
 
export default class SidebarMain extends React.Component {

  	// Data
	// Lifecycle

  
  render() {
    console.log('sidebar',this.props)
    return (
      <div className="SidebarMain">
        <Nav vertical>
				  <h3 className="categorySidebar">Kategorien</h3>
				    <NavItem>
            {
						    this.props.categories.map((c) => {
							return <Category category={c} key={c._id} setCategory={this.props.setCategory} categoryID={c._id} />
						})
					}
				</NavItem>
        </Nav>
      </div>
    );
  }
}