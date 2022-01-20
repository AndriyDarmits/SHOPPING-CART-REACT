import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


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
                <p>Price: {this.props.product.price} uah.</p>
                {this.props.product.isInShoppingCart ?
                    <p>In the shopping cart=)</p> :
                    <IconButton onClick={this.addGoodsToCart} color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>}
            </div>
        );
    }
}
