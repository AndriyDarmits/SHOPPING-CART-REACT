import logo from './logo.svg';
import './App.scss';
import Button from '@mui/material/Button';
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
    fetch('https://api.ifcityevent.com/products')
      .then(response => response.json())
      .then(response => this.setState({
        products: response.map(item => {
          return { ...item, isInShoppingCart: false, count: 1 }
        })
      }))
  }

  componentDidUpdate() {
    // something has to be updated here
  }

  // adding goods to shopping cart
  addGoodsToCart(id) {
    const productInCart = this.state.products.map(product => {
      if (product.id === id) {
        // set true, if product is in shopping cart
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
        // set false, if product isn`t in shopping cart
        product.isInShoppingCart = false
      }
      return product
    })

    this.setState({
      products: productOutOfShoppingCart,
      shoppingCart: changedShoppingCart,
    })
  }

  // !! А ТУТ ПРОБЛЕМКА, ЧОМУСЬ ( COUNT ) ОНОВЛЮЄТЬСЯ І В STATE.PRODUCTS, I В SHOPPINGCART (НЕ РОЗУМІЮ ЧОМУ) 
  // decrementing quantity
  onDecrementCount(decrementedProduct) {
    const decrementCount = this.state.shoppingCart.map(shoppingCartProduct => {
      if (shoppingCartProduct.id === decrementedProduct.id) {
        if (shoppingCartProduct.count <= 1) {
          shoppingCartProduct.count = 1;
        } else {
          shoppingCartProduct.count = shoppingCartProduct.count - 1;
        }

      }
      return shoppingCartProduct
    })

    this.setState({
      ...this.state.products,
      shoppingCart: decrementCount
    })
  }
  // !! А ТУТ ПРОБЛЕМКА, ЧОМУСЬ ( COUNT ) ОНОВЛЮЄТЬСЯ І В STATE.PRODUCTS, I В SHOPPINGCART (НЕ РОЗУМІЮ ЧОМУ)
  // incrementing quantity
  onIncrementCount(incrementedProduct) {
    const incrementCount = this.state.shoppingCart.map(shoppingCartProduct => {
      if (shoppingCartProduct.id === incrementedProduct.id) {
        shoppingCartProduct.count = shoppingCartProduct.count + 1;
      }
      return shoppingCartProduct
    })

    this.setState({
      ...this.state.products,
      shoppingCart: incrementCount
    })

  }

  // deleting all goods from shoppingCart
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



