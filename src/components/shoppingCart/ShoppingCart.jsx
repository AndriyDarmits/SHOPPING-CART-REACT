import React, { Component } from 'react'
import ShoppingCartItems from './ShoppingCartItems';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


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
                        <>{this.props.shoppingCartItems.map((product) => <ShoppingCartItems productCart={product} onDeleteProduct={this.onDeleteProduct}
                            onDecrementCount={this.onDecrementCount} onIncrementCount={this.onIncrementCount} />
                        )}
                            <div className="productsAmount" >
                                <Button variant="contained" startIcon={<DeleteIcon />} onClick={this.clearAll} size="small">
                                    Clear all
                                </Button>
                                <span>Total:{(this.props.shoppingCartItems.reduce((productPrev, productCurrent) => {
                                    return productPrev + productCurrent.price * productCurrent.count
                                }, 0)).toFixed(2)} uah.</span>
                            </div></>
                        :
                        <div>The shopping cart is empty...</div>}
                </div>
            </div >
        )
    }
}
