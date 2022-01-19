import React, { Component } from 'react';

export default class ShoppingCartItems extends Component {

    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this)
        this.decrementCount = this.decrementCount.bind(this)
        this.incrementCount = this.incrementCount.bind(this)

    }

    deleteProduct() {
        this.props.onDeleteProduct(this.props.product)
    }

    decrementCount() {
        this.props.onDecrementCount(this.props.product)
    }
    incrementCount() {
        this.props.onIncrementCount(this.props.product)
    }

    render() {
        return (

            <div className="shoppingCart__item">
                <p>Name: {this.props.product.name}</p>
                <p>Price: {this.props.product.price} грн.</p>
                <p>Quantity:
                    <span className="shoppingCart__item--dec" onClick={this.decrementCount}>&#x2212;</span>
                    <span>[ {this.props.product.count} ]</span>
                    <span className="shoppingCart__item--inc" onClick={this.incrementCount}>&#43;</span></p>
                <button onClick={this.deleteProduct}>Remove</button>
            </div>

        )
    }
}
