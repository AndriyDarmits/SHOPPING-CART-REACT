import React, { Component } from 'react'
import ProductItem from './ProductItem'
import './loadingData.css'

export default class ProductItems extends Component {

    constructor(props) {
        super(props);
        this.addGoodsToCart = this.addGoodsToCart.bind(this)
    }

    addGoodsToCart(productStore) {
        this.props.addGoodsToCart(productStore)
    }
    render() {
        return (
            <div className="product__items">
                <h2>Goods</h2>
                {this.props.productsStoreItems.length ? this.props.productsStoreItems.map(product => <ProductItem productStore={product} addGoodsToCart={this.addGoodsToCart} />) :
                    <div class="loading-container">
                        <div class="loading"></div>
                        <div id="loading-text">loading</div>
                    </div>}
            </div>
        )
    }
}
