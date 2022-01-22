import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.addGoodsToCart = this.addGoodsToCart.bind(this);
    }

    addGoodsToCart(e) {
        this.props.addGoodsToCart(this.props.productStore)
    }

    render() {
        return (
            <div className="product__item">
                <p>Name: {this.props.productStore.name}</p>
                <p>Price: {this.props.productStore.price} uah.</p>
                {this.props.productStore.isInShoppingCart ?
                    <p>In the shopping cart=)</p> :
                    <IconButton onClick={this.addGoodsToCart} color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>}
            </div>
        );
    }
}