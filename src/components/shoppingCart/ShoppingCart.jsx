import React, { Component } from 'react'
import ProductItems from '../productsItem/ProductItems';
import ShoppingCartItems from './ShoppingCartItems';


export default class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.onDeleteProduct = this.onDeleteProduct.bind(this)
        this.onDecrementCount = this.onDecrementCount.bind(this)
        this.onIncrementCount = this.onIncrementCount.bind(this)
        this.clearAll = this.clearAll.bind(this)
    }

    onDeleteProduct(deleteProduct) {
        this.props.onDeleteProduct(deleteProduct)
    }
    onDecrementCount(dectementedProduct) {
        this.props.onDecrementCount(dectementedProduct)
    }
    onIncrementCount(incrementedProduct) {
        this.props.onIncrementCount(incrementedProduct)
    }


    clearAll() {
        this.props.onClearAll(true)
    }


    render() {
        return (
            <div className="shopping__cart">
                <h2>Shopping Cart</h2>
                < div className="shoppingCart__items" >
                    {this.props.shoppingCartItems.length ?
                        <>{this.props.shoppingCartItems.map((product) => <ShoppingCartItems product={product} onDeleteProduct={this.onDeleteProduct}
                            onDecrementCount={this.onDecrementCount} onIncrementCount={this.onIncrementCount} />
                        )}
                            <div >
                                <button className="clearAll__btn" onClick={this.clearAll}>Clear all</button>

                                <span>Total:{(this.props.shoppingCartItems.reduce((productPrev, productCurrent) => {
                                    return productPrev + productCurrent.price
                                }, 0)).toFixed(2)} uah.</span>
                            </div></>
                        :
                        <div>The shopping cart is empty...</div>}
                </div>
            </div >
        )
    }
}
