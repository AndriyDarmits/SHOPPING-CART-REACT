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
    this.onDecrementCount = this.onDecrementCount.bind(this);
    this.onIncrementCount = this.onIncrementCount.bind(this);
    this.onClearAll = this.onClearAll.bind(this);
    this.state = {
      products: [],
      shoppingCart: [],

    }
  }


  // receiving data from API
  componentDidMount() {
    fetch('https://mocki.io/v1/340bde2d-db93-4a5e-b96c-291f94eda6ff')
      .then(response => response.json())
      .then(response => this.setState({ products: response }))
  }

  componentDidUpdate() {

  }

  // adding goods to shopping cart
  addGoodsToCart(id) {
    const productInCart = this.state.products.map(product => {
      if (product.id === id) {
        product.isInShoppingCart = true;

      }
      return product;

    }).filter(product => product.id === id)


    this.setState({
      ...this.state.products,
      shoppingCart: [...this.state.shoppingCart, ...productInCart]
    })

  }
  // deleting goods to shopping cart
  onDeleteProduct(deleteProduct) {
    const changedShoppingCart = this.state.shoppingCart.filter(product => product.id !== deleteProduct.id);
    const productOutOfShoppingCart = this.state.products.map(product => {
      if (product.id === deleteProduct.id) {
        product.isInShoppingCart = false
      }
      return product
    })

    this.setState({
      products: productOutOfShoppingCart,
      shoppingCart: changedShoppingCart,
    })
  }

  onDecrementCount(decrementedProduct) {

    const decrementCount = this.state.shoppingCart.map(shoppingCartProduct => {
      if (shoppingCartProduct.id === decrementedProduct.id) {
        if (shoppingCartProduct.count <= 1) {
          shoppingCartProduct.count = 1;
        } else {
          shoppingCartProduct.count--;
        }

      }
      return shoppingCartProduct
    })

    this.setState({
      ...this.state.products,
      shoppingCart: decrementCount
    })
  }

  onIncrementCount(incrementedProduct) {
    const incrementCount = this.state.shoppingCart.map(shoppingCartProduct => {
      if (shoppingCartProduct.id === incrementedProduct.id) {
        shoppingCartProduct.count++;
      }
      return shoppingCartProduct
    })

    this.setState({
      ...this.state.products,
      shoppingCart: incrementCount
    })

  }

  onClearAll(isClearAll) {

    if (isClearAll) {
      const changeIsInShoppingCartState = this.state.products.map(product => {
        product.isInShoppingCart = false
        return product
      })
      this.setState({
        products: changeIsInShoppingCartState,
        shoppingCart: []
      })
    }

  }


  render() {
    return (
      <div className="store__wrapper">
        <div className="store__container">
          <div className="store__inner">
            <h1>Darmits store</h1>
            <div className="store__flexbox">
              <ProductItems products={this.state.products} addGoodsToCart={this.addGoodsToCart} idDeleted={this.state.isDeleted} />
              <ShoppingCart shoppingCartItems={this.state.shoppingCart} onDeleteProduct={this.onDeleteProduct}
                onDecrementCount={this.onDecrementCount} onIncrementCount={this.onIncrementCount}
                onClearAll={this.onClearAll} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



