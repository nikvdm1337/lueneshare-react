import React, { Component } from 'react';

class MyProduct extends Component {
    render() {
        return (
            <div className="MyProduct" onClick={() => this.props.setProductID(this.props.product._id)}>
                {this.props.product.title}
            </div>
        );
    }
}

export default MyProduct;