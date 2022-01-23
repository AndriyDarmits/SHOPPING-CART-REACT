import React, { Component } from 'react'
import ShoppingCartItems from './ShoppingCartItems';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


export default class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.onDeleteProduct = this.onDeleteProduct.bind(this)
        this.onDecrementCount = this.onDecrementCount.bind(this)
        this.onIncrementCount = this.onIncrementCount.bind(this)
        this.clearAll = this.clearAll.bind(this)
        this.buyProduct = this.buyProduct.bind(this)
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

    buyProduct() {
        alert(JSON.stringify(this.props.shoppingCartItems))
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
                            <div className="products__checkout" >
                                <span className="deleteAll__product">
                                    <Button variant="contained" startIcon={<DeleteIcon />} onClick={this.clearAll} size="small">
                                        Clear all
                                    </Button>
                                </span>
                                <span className="buyAll__product">
                                    <Button variant="contained" endIcon={<SendIcon />} size="small" onClick={this.buyProduct}>
                                        Buy
                                    </Button>
                                </span>
                                <span >Total:{(this.props.shoppingCartItems.reduce((productPrev, productCurrent) => {
                                    return productPrev + productCurrent.price
                                }, 0)).toFixed(2)} uah.</span>
                            </div></>
                        :
                        <div className="cartEmpty__notific">The shopping cart is empty...</div>}
                </div>
            </div >
        )
    }
}
