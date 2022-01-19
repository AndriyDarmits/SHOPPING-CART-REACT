import React, { Component } from 'react'
import ProductItems from '../productsItem/ProductItems';
import ShoppingCartItems from './ShoppingCartItems';


export default class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.onDeleteProduct = this.onDeleteProduct.bind(this)

    }

    onDeleteProduct(deleteProduct) {
        this.props.onDeleteProduct(deleteProduct)
    }


    render() {
        return (
            <div className="shopping__cart">
                <h2>Shopping Cart</h2>
                <div className="shoppingCart__items" >
                    {this.props.shoppingCartItems.length ? this.props.shoppingCartItems.map((product) => <ShoppingCartItems product={product} onDeleteProduct={this.onDeleteProduct} />) : <div>The shopping cart is empty...</div>}
                </div>
            </div>
        )
    }
}
