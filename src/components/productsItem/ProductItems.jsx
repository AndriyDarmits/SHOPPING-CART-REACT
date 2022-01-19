import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductItems extends Component {

    constructor(props) {
        super(props);
        this.addGoodsToCart = this.addGoodsToCart.bind(this)
    }

    addGoodsToCart(id) {
        this.props.addGoodsToCart(id)
    }
    render() {
        return (
            <div className="product__items">
                <h2>Goods</h2>
                {this.props.products.length ? this.props.products.map(product => <ProductItem product={product} addGoodsToCart={this.addGoodsToCart} />) : "Loading data..."}
            </div>
        )
    }
}
