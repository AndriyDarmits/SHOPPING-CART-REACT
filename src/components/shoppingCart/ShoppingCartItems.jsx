import React, { Component } from 'react';

export default class ShoppingCartItems extends Component {

    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct() {
        this.props.onDeleteProduct(this.props.product)
    }

    render() {
        return (
            <div className="shoppingCart__item">
                <p>Name: {this.props.product.name}</p>
                <p>Price: {this.props.product.price} грн.</p>
                <button onClick={this.deleteProduct}>Remove</button>
            </div>
        )
    }
}
