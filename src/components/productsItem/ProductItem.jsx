import React, { Component } from 'react';

export default class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.addGoodsToCart = this.addGoodsToCart.bind(this);
    }


    addGoodsToCart(e) {

        this.props.addGoodsToCart(this.props.product.id)
    }


    render() {


        return (
            <div className="product__item">
                <p>Name: {this.props.product.name}</p>
                <p>Price: {this.props.product.price} грн.</p>
                {this.props.product.isInShoppingCart ?
                    <p>В корзині</p> :
                    <button onClick={this.addGoodsToCart}>Buy</button>}
            </div>

        );
    }
}
