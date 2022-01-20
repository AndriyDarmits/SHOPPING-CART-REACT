import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
                <p>Price: {this.props.product.price} uah.</p>
                <p className="quantity">
                    <span>Quantity:</span>
                    <RemoveIcon onClick={this.decrementCount} />
                    {/* <span className="shoppingCart__item--dec" >&#x2212;</span> */}
                    <span className="count"> {this.props.product.count} </span>
                    <AddIcon onClick={this.incrementCount} />
                    {/* <span className="shoppingCart__item--inc" >&#43;</span> */}
                </p>
                <IconButton onClick={this.deleteProduct} aria-label="delete">
                    <DeleteIcon />
                </IconButton>

            </div>

        )
    }
}
