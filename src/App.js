import logo from './logo.svg';
import './App.scss';
import ProductItems from './components/productsItem/ProductItems';
import ShoppingCart from './components/shoppingCart/ShoppingCart';

import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.addGoodsToCart = this.addGoodsToCart.bind(this);
    this.onDeleteProduct = this.onDeleteProduct.bind(this);
    this.state = {
      products: [],
      shoppingCart: [],
    }
  }


  // receiving data from API
  componentDidMount() {
    fetch('https://api.ifcityevent.com/products')
      .then(response => response.json())
      .then(response => this.setState({ products: response }))
  }

  componentDidUpdate() {

  }

  // adding goods to shopping cart
  addGoodsToCart(id) {
    const productInCart = this.state.products.filter(products => {
      return products.id === id
    })


    this.setState({
      ...this.state,
      shoppingCart: Array.from(new Set([...this.state.shoppingCart.slice(0), ...productInCart]))
    })

  }
  // deleting goods to shopping cart
  onDeleteProduct(deleteProduct) {
    const changedShoppingCart = this.state.shoppingCart.filter(product => product.id !== deleteProduct.id);

    this.setState({
      ...this.state,
      shoppingCart: changedShoppingCart
    })
  }

  render() {
    return (
      <div className="store__wrapper">
        <div className="store__container">
          <div className="store__inner">
            <h1>Darmits store</h1>
            <div className="store__flexbox">
              <ProductItems products={this.state.products} addGoodsToCart={this.addGoodsToCart} />
              <ShoppingCart shoppingCartItems={this.state.shoppingCart} onDeleteProduct={this.onDeleteProduct} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



